import React, {useRef, useEffect, useState} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {random} from 'lodash'
import {useParams, useHistory, Link} from 'react-router-dom'
import {AiFillSound} from 'react-icons/ai'
import {FaRegCaretSquareLeft, FaRegCaretSquareRight} from 'react-icons/fa'
import {MdDesktopMac} from 'react-icons/md'
import {GiClick} from 'react-icons/gi'

import cs from './styles.css'
import pages from './pages'

const fadeClasses = {
  enter: cs.fadeEnter,
  enterActive: cs.fadeEnterActive,
  enterDone: cs.fadeEnterDone,
  appear: cs.fadeAppear,
  appearActive: cs.fadeAppearActive,
  appearDone: cs.fadeAppearDone,
  exit: cs.fadeExit,
  exitActive: cs.fadeExitActive,
}

const randomPageIdx = exclude => {
  let newPage = exclude
  while (newPage === exclude) {
    newPage = random(pages.length - 1)
  }
  return newPage
}

const TRANSITION_MS = 1000
const TRANSITION_S = TRANSITION_MS / 1000

let audioContext;
let fadeGainNode;
let enterGainNode;

let latestRequest = 0
const MediaCollage: FunctionComponent<{}> = props => {
  const {page} = useParams()
  const [started, setStarted] = useState(false)
  const [currentSource, setCurrentSource] = useState(undefined)
  const history = useHistory()
  const selectedPageIdx = page !== undefined ? Number(page) : undefined
  const selectedPage = selectedPageIdx !== undefined ? pages[selectedPageIdx] : undefined
  const toc = page === "toc"

  const notValidPageIdx = selectedPageIdx >= pages.length || selectedPageIdx < 0 || Number.isNaN(selectedPageIdx)
  if (!toc && notValidPageIdx) {
    history.replace(`/pastiche`)
  }

  const navigateToRandomPage = e => {
    if (e.target.tagName !== 'A') {
      const newPage = randomPageIdx(selectedPageIdx)
      history.push(`/pastiche/${newPage}`)
    }
  }

  const navigateToLatest = () => {
      history.push(`/pastiche/${pages.length - 1}`)
  }

  const navigateViaKeyboard = e => {
    if (e.key === 'ArrowRight') {
      const newPage = selectedPageIdx + 1
      history.push(`/pastiche/${newPage > pages.length - 1 ? 0 : newPage}`)
    }

    if (e.key === 'ArrowLeft') {
      const newPage = selectedPageIdx - 1
      history.push(`/pastiche/${newPage < 0 ? pages.length - 1 : newPage}`)
    }
  }

  const startAudioContext = () => {
    if (!started) {
      audioContext = new AudioContext()
      fadeGainNode = audioContext.createGain()
      enterGainNode = audioContext.createGain()
      fadeGainNode.connect(audioContext.destination)
      enterGainNode.connect(audioContext.destination)
      setStarted(true)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    setCurrentSource(undefined)
    if (started && !toc && selectedPage !== undefined) {
      if (selectedPage.audio !== undefined) {
        const requestNumber = latestRequest + 1
        latestRequest = latestRequest + 1
        fetch(selectedPage.audio.src, {signal: controller.signal})
          .then(response => response.arrayBuffer())
          .then(buffer => audioContext.decodeAudioData(buffer))
          .then(decodedBuffer => {
            if (latestRequest === requestNumber) {
              const source = audioContext.createBufferSource()
              source.loop = true
              source.buffer = decodedBuffer
              setCurrentSource(source)
            }
          })
      }
    }
    
    return () => {
      controller.abort()
    }
  }, [started, toc, selectedPage])

  useEffect(() => {
    if (currentSource !== undefined) {
      enterGainNode.gain.setValueAtTime(0.0001, audioContext.currentTime)
      currentSource.connect(enterGainNode)
      currentSource.start(audioContext.currentTime)
      enterGainNode.gain.exponentialRampToValueAtTime(1.0, audioContext.currentTime + TRANSITION_S)
    }
        
    return () => {
      if (currentSource !== undefined) {
        currentSource.disconnect(enterGainNode)
        fadeGainNode.gain.setValueAtTime(1, audioContext.currentTime)
        currentSource.connect(fadeGainNode)
        fadeGainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + TRANSITION_S)
        currentSource.stop(audioContext.currentTime + TRANSITION_S)
      }
    }
  }, [currentSource])

  // logic is complicated here because every direct landing requires
  // a user interaction to initiate the web audio api
  const viewingPastiches = started && selectedPage !== undefined && !toc
  const viewingLanding = (!started || selectedPage === undefined) && !toc
  return (
    <div className={cs.media}
      tabIndex={0}
      onClick={viewingPastiches ? navigateToRandomPage : () => {}}
      onKeyDown={viewingPastiches ? navigateViaKeyboard : () => {}}
    > 
      <TransitionGroup component={null}>
        {viewingLanding && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={TRANSITION_MS}
            classNames={fadeClasses}
          >
            <div className={cs.preamble}>
              <div className={cs.start} onClick={() => {
                startAudioContext()
                if (selectedPage === undefined) {
                  navigateToLatest()
                }
              }}>
                hey. breathe and then click me.
              </div>
              <div className={cs.instructions}>
                <div className={cs.instructionBlock}>
                  <div className={cs.instruction}>
                    <div className={cs.icons}>
                      <GiClick />
                    </div>
                    <span>random navigation</span>
                  </div>
                  <div className={cs.instruction}>
                    <div className={cs.icons}>
                      <FaRegCaretSquareLeft />
                      <FaRegCaretSquareRight />
                    </div>
                    <span>sequential navigation</span>
                  </div>
                </div>
                <div className={cs.instrictionBlock}>
                  <div className={cs.instruction}>
                    <div className={cs.icons}>
                      <MdDesktopMac />
                    </div>
                    <span>for desktop only</span>
                  </div>
                  <div className={cs.instruction}>
                    <div className={cs.icons}>
                      <AiFillSound />
                    </div>
                    <span>turn on your sound</span>
                  </div>
                </div>
              </div>
              <div className={cs.footer}>
                <Link className={cs.preambleLink} to="/pastiche/toc">toc</Link>
                /
                <a
                  className={cs.preambleLink}
                  href="/pastiche/rss"
                  target="_blank"
                  rel="noopener noreferrer"
                >rss</a>
                /
                <Link className={cs.preambleLink} to="/">joeong.com</Link>
              </div>
            </div>
          </CSSTransition>
        )}
        {toc && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={TRANSITION_MS}
            classNames={fadeClasses}
          >
            <ol className={cs.toc} start={0}>
              {pages.map((page, i) => (
                <li key={i}>
                  <Link
                    className={cs.preambleLink}
                    onClick={startAudioContext}
                    to={`/pastiche/${i}`}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ol>
          </CSSTransition>
        )}
        {viewingPastiches && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={TRANSITION_MS}
            classNames={fadeClasses}
            key={selectedPageIdx}
          >
            <div className={cs.fader}>
              <div className={cs.background}>
                {selectedPage.background.type === 'video' &&
                  <video autoPlay preload="metadata" loop playsInline muted>
                    <source src={selectedPage.background.src} />
                  </video>
                }
                {selectedPage.background.type === 'image' &&
                  <div
                    className={cs.image}
                    style={{backgroundImage: `url(${selectedPage.background.src})`}}
                  />
                }
              </div>
              <div className={cs.text} style={selectedPage.textStyles}>
                <div className={cs.textFrame}>
                  <selectedPage.text />
                </div>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}

export default MediaCollage
