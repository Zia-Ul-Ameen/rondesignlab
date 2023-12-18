import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <div className= {s.wrapper}>
      <div className={s.top}>
        <div className={s.paraTop}>
        If you know someone we can <br /> help, please share this site
        </div>
        <div className={s.buttonWrapper}><button className={s.buttonTop}>Share the link</button></div>
      </div>

      <div className={s.bottom}>
        <div className={s.bottomLeft}>
            <div className={s.bottomPara}>For whose daily routines involve <br /> PDF presentations</div>
            <div><button className={s.bottomButton}>Download & Share PDF</button></div>
        </div>
        <div className={s.bottomRight}>
        <div className={s.originalLogo}>© 2023, Rondesign</div>
        <div>
        <ul className={s.unorderedList}>
            <li className={s.li1}>Sitemap <div className={s.after1}></div></li>
            <li className={s.li2}>Privacy Policy<div className={s.after2}></div></li>
            <li className={s.li3}>Terms of Use<div className={s.after3}></div></li>
            <li className={s.li4}>Cookie Policy<div className={s.after4}></div></li>
        </ul>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default Footer
