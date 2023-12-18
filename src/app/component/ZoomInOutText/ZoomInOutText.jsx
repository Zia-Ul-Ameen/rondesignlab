'use client'
import React, { useRef } from 'react'
import s from './ZoomInOutText.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'

const ZoomInOutText = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  })
  const newAnime = useTransform(scrollYProgress, [1, 0], [0.9,1.2]);

  return (
    <div className={s.background}>
      <motion.div ref={ref} style={{scale:newAnime}} className={`${s.zoomIn} `}>Your challenges,<br /> our expertise<br /> in solving them</motion.div>
    </div>
  )
}

export default ZoomInOutText
