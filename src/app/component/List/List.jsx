import React from 'react'
import s from './List.module.css'

const List = () => {
  return (
    <div className={s.list}>
      <ul className={s.ul1}>
        <li className={s.li1}>Say Hello 👋<div className={s.after1}></div></li>

        <li className={s.li2}>Tik Tok<div className={s.after2}></div></li>
        <li className={s.li3}>Instagram<div className={s.after3}></div></li>
        <li className={s.li4}>Dribble<div className={s.after4}></div></li>
        <li className={s.li5}>Behance<div className={s.after5}></div></li>
      </ul>

      <ul className={s.ul2}>
        <li className={s.li21}>Trail<div className={s.after21}></div></li>

        <li className={s.li22}>About us<div className={s.after22}></div></li>
        <li className={s.li23}>Cases<div className={s.after23}></div></li>
        <li className={s.li24}>Blog<div className={s.after24}></div></li>
      </ul>
    </div>
  )
}

export default List
