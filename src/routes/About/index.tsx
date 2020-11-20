import React, {useRef, useEffect, useState} from 'react';
import {map, sum, findIndex, range} from 'lodash'
import useComponentSize from '@rehooks/component-size'
import * as d3 from 'd3'

import cs from './styles.css'
import faces from './faces.tsx'

const generateRanges = fs => {
  const incidence = fs.map(f => 1 / ((f.width * f.height) ** 0.15))
  const total = sum(incidence)
  const weights = incidence.map(incidence => incidence / total)
  var acc = 0
  const ranges = weights.map(weight => acc = acc + weight)
  return ranges
}

const ranges = generateRanges(faces)
const generateNodes = size => range(0, 80).map(() => Math.random())
  .map(entry => findIndex(ranges, range => range > entry))
  .map((faceIdx, i)  => ({
    id: i,
    radius: Math.max(faces[faceIdx].width, faces[faceIdx].height) * 6,
    fontSize: faces[faceIdx].fontSize,
    text: faces[faceIdx].text,
    x: Math.random() * size.width,
    y: Math.random() * size.height,
  }))

var interval;
const About: FunctionComponent<{}> = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const textWrapperRef = useRef<HTMLDivElement>(null)
  const size = useComponentSize(textWrapperRef)
  var [nodes, setNodes] = useState(null)

  useEffect(() => {
    if (textWrapperRef.current !== null && size.height !== 0) {
      setNodes(generateNodes(size))
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
        .text(node => node.text)
        .attr('class', cs.face)
        .style('font-size', node => node.fontSize)
      
      const ticked = () => {
        const text = textWrapper.selectAll('div')
                        .data(nodes, node => node.id)
      
        text.style('top', d => `${d.y}px`)
            .style('left', d => `${d.x}px`)
      }

      const simulation = d3.forceSimulation(nodes)
                      .force("charge", d3.forceManyBody(-200))
                      .force("x", d3.forceX().x(d => Math.random() * 1.5 * size.width))
                      .force("y", d3.forceY().y(d => Math.random() * 1.5 * size.height))
                      .force("collide", d3.forceCollide(d => d.radius))
                      .alphaDecay(0)
                      .velocityDecay(0.995)
                      .on('tick', ticked)

      interval = setInterval(() => {
        simulation
          .force("x", d3.forceX().x(d => Math.random() * 1.5 * size.width))
          .force("y", d3.forceY().y(d => Math.random() * 1.5 * size.height))
      }, 10000)
    }
  }, [nodes])

  return (
    <div className={cs.faces}>
      <div className={cs.textWrapper} ref={textWrapperRef}>
      </div>
    </div>
  )
}

export default About
