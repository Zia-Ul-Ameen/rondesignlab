import React, { useRef } from 'react'
import s from './PhotoFrames.module.css'
import { motion, useScroll, useTransform } from 'framer-motion'

const PhotoFrames = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  })

  const newAnime = useTransform(scrollYProgress, [0, 1], [0.8,1.2]);


  return (
    <div className={s.wrapper}>
      <div className={s.texts}>
        <motion.div ref={ref} style={{scale:newAnime}} className={`${s.p1} `}>Everyone deserves a clear & distinct design</motion.div>
        <div className={s.pWrapper}><p className={s.p2}>“</p>
        <p className={s.p3}>For 88% of users, lack of ease of use may be the reason they never return to a site</p>
        <p className={s.p4}>Selz</p></div>
      </div>
      <div className={s.images}>
        <img src="/img5.webp" className={s.image1}></img>
        <img src='https://framerusercontent.com/images/7HgDcYfDenGWzRCIdBnuhvRTJkU.jpg?scale-down-to=512' className={s.image2}></img>
        <img src='https://framerusercontent.com/images/ZeAJ4cgFGCy95pEiuIitxXrMY7c.png?scale-down-to=512' className={s.image3}></img>
        <img src='https://framerusercontent.com/images/p40fYYziHYJZ2xa6OuAefQX4JrM.png?scale-down-to=512' className={s.image4}></img>
        <img src='https://framerusercontent.com/images/LB5TLKPRIFFBXFtofGl1YoKPhN0.png?scale-down-to=512' className={s.image5}></img>
        <img src='https://framerusercontent.com/images/3rHZ0kmQw6qWsvqL6AY58WpofY.png?scale-down-to=512' className={s.image6}></img>
        <img src='https://framerusercontent.com/images/ytLQiWN546rX4vDzVAdYFxbdEjM.png?scale-down-to=512' className={s.image7}></img>
      </div>
    </div>
  )
}

export default PhotoFrames
