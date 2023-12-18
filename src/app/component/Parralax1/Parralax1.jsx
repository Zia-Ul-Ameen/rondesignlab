"use client"
import React, { useRef } from 'react'
import s from './Parralax1.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'


const Parralax1 = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 80%"],
  })
  
  const newAnime = useTransform(scrollYProgress, [1, 0], [0.8,1.2]);


  return (
    <div className={s.section2} >
        <motion.div ref={ref} style={{scale:newAnime}} className={`${s.zoomOut2}`}>What are we <br /> fighting against?</motion.div>
        <div className={s.parallaxP2}>Users do not use my design or project</div>
    </div>
  )
}

export default Parralax1
