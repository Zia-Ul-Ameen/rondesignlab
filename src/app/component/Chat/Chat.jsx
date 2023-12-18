import React from 'react'
import s from  './Chat.module.css'

const Chat = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.p1}>
        <p className={s.p11}>Shall we chat?</p>
        <div className={s.p12}>hello@rondesignlab.com<div className={s.after}></div></div>
      </div>
      <div className={s.p2}>
        Let`s <img className={s.image} src="https://framerusercontent.com/images/8hfo7JbKgBHwmvKExRXX3qeCYBg.png?scale-down-to=512" />talk
        <button className={s.button}>Message</button>
      </div>
     
    </div>
  )
}

export default Chat
