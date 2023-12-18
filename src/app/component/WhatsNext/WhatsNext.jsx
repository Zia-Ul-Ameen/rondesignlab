import React, { useRef } from 'react'
import s from './WhatsNext.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'

const WhatsNext = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  })
  
  const newAnime = useTransform(scrollYProgress, [1, 0], [0.8,1.2]);

  return (
    <div className={s.wrapper}>
      <motion.div ref={ref} style={{scale:newAnime}} className={`${s.para1}`}>What`s Next</motion.div>
      <div className={s.para2}>How will our cooperation <br />go after the start of work</div>

    </div>
  )
}

export default WhatsNext
