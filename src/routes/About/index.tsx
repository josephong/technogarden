import React, {useRef, useEffect, useState} from 'react'
import {map, sum, findIndex, range} from 'lodash'
import randomColor from 'randomcolor'
import useComponentSize from '@rehooks/component-size'
import * as d3 from 'd3'

import cs from './styles.css'
import {links, faces} from './faces.tsx'

const generateRanges = fs => {
  const incidence = fs.map(f => 1 / ((f.width * f.height) ** 0.3))
  const total = sum(incidence)
  const weights = incidence.map(incidence => incidence / total)
  var acc = 0
  const ranges = weights.map(weight => acc = acc + weight)
  return ranges
}

const ranges = generateRanges(faces)
const generateRandomFaceIndices = () => range(0, 100).map(() => Math.random())
  .map(entry => findIndex(ranges, range => range > entry))

const createNodeFromFace = (id, face, size) => ({
  id,
  radius: (face.width * face.height) ** 0.25 * 20,
  fontSize: face.fontSize,
  text: face.text,
  x: Math.random() * size.width,
  y: Math.random() * size.height,
})

const createNodesFromFaceIndices = (faceSource, faceIdxs, size, prefix) =>
  faceIdxs.map((faceIdx, i) => createNodeFromFace(`${prefix}-${i}`, faceSource[faceIdx], size))

const generateNodes = size => ([
  ...createNodesFromFaceIndices(links, range(0, links.length), size, 'links'),
  ...createNodesFromFaceIndices(faces, generateRandomFaceIndices(), size, 'faces'),
])

var interval;
const About: FunctionComponent<{}> = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const textWrapperRef = useRef<HTMLDivElement>(null)
  const size = useComponentSize(textWrapperRef)
  var [nodes, setNodes] = useState(null)
  const [color, setColor] = useState('#000000')

  useEffect(() => {
    if (textWrapperRef.current !== null && size.height !== 0) {
      if (nodes === null) {
        setNodes(generateNodes(size))
      }
    }
  }, [textWrapperRef.current, size.height])

  useEffect(() => {
    if (nodes !== null) {
      clearInterval(interval)
      const textWrapper = d3.select(textWrapperRef.current)

      const text = textWrapper.selectAll('div')
                      .data(nodes, node => node.id)
      
      text.enter()
        .append('div')
        .html(node => node.text)
        .attr('class', cs.face)
        .style('font-size', node => node.fontSize)
      
      const ticked = () => {
        const text = textWrapper.selectAll('div')
                        .data(nodes, node => node.id)
      
        text.style('top', d => `${d.y}px`)
            .style('left', d => `${d.x}px`)
      }

      const simulation = d3.forceSimulation(nodes)
                      .force("charge", d3.forceManyBody(-100))
                      .force("x", d3.forceX().x(d => (Math.random() * 1.5 - .25) * size.width))
                      .force("y", d3.forceY().y(d => (Math.random() * 1.5 - .25) * size.height))
                      .force("collide", d3.forceCollide(d => d.radius))
                      .alphaDecay(0)
                      .velocityDecay(0.995)
                      .on('tick', ticked)

      interval = setInterval(() => {
        simulation
          .force("x", d3.forceX().x(d => (Math.random() * 1.5 - .25) * size.width))
          .force("y", d3.forceY().y(d => (Math.random() * 1.5 - .25) * size.height))
      }, 15000)
    }
  }, [nodes])

  return (
    <div className={cs.faces} onClick={() => setColor(randomColor({luminosity: 'dark'}))}>
      <div className={cs.textWrapper} style={{background: color}} ref={textWrapperRef}>
      </div>
    </div>
  )
}

export default About
