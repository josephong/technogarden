import React, {useRef, useEffect, useState} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {random} from 'lodash'
import {useParams, useHistory} from 'react-router-dom'

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

const audioContext = new AudioContext()
const fadeGainNode = audioContext.createGain()
const enterGainNode = audioContext.createGain()
fadeGainNode.connect(audioContext.destination)
enterGainNode.connect(audioContext.destination)

const MediaCollage: FunctionComponent<{}> = props => {
  const {page} = useParams()
  const [started, setStarted] = useState(false)
  const [currentSource, setCurrentSource] = useState(undefined)
  const history = useHistory()
  const selectedPageIdx = page !== undefined ? Number(page) : pages.length - 1
  const selectedPage = pages[selectedPageIdx]

  const navigateToRandomPage = e => {
    if (e.target.tagName !== 'A') {
      const newPage = randomPageIdx(selectedPageIdx)
      history.push(`/pastiche/${newPage}`)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    setCurrentSource(undefined)
    if (started) {
      if (selectedPage.audio !== undefined) {
        fetch(selectedPage.audio.src, {signal: controller.signal})
          .then(response => response.arrayBuffer())
          .then(buffer => audioContext.decodeAudioData(buffer))
          .then(decodedBuffer => {
            const source = audioContext.createBufferSource()
            source.loop = true
            source.buffer = decodedBuffer
            setCurrentSource(source)
          })
      }
    }
    
    return () => {
      controller.abort()
    }
  }, [started, selectedPage])

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

  return (
    <div className={cs.media} onClick={started ? navigateToRandomPage : () => {}}> 
      <TransitionGroup component={null}>
        {!started && (
          <CSSTransition
            in={true}
            appear={true}
            timeout={TRANSITION_MS}
            classNames={fadeClasses}
          >
            <div>
              <div className={cs.start} onClick={() => setStarted(true)}>
                hey. breathe and then click me.
              </div>
            </div>
          </CSSTransition>
        )}  
        {started && (
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
                  <video muted autoPlay preload="metadata" loop playsInline>
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
              <div className={cs.text} style={{color: selectedPage.textColor}}>
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
