import React, { useRef } from 'react'
import s from './ParallaxImage.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxImage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1" , "1.33 1"]
  })
 const newScale = useTransform(scrollYProgress, [0,1],[1,1.08]);

  return (
    <motion.div ref={ref} style={{ scale: newScale, scrollBehavior: 'smooth'}} className={`parallax ${s.parallax}`}>
        <p className={s.para1}>Design trial. Get started <br />with your first trial</p>        
      <button className={s.button}>Book a trail</button>
    </motion.div>
  )
}

export default ParallaxImage
