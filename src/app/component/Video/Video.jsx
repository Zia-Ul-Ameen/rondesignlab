"use client"
import React, { useRef } from 'react'
import s from './Video.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'

const Video = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1" , "1.33 1"]
  })
 const newScale = useTransform(scrollYProgress, [0,1],[1,1.1]);

  return (
    <div className={s.parallax}>
      <motion.video  ref={ref} style={{ scale: newScale, scrollBehavior: 'smooth'}} autoPlay loop muted  className={`framerMotion ${s.bg1Hover}`}>
        <source src="/clip.mp4" />
      </motion.video>
    </div>
  )
}

export default Video
