import React from 'react'
import s from './QRcode.module.css'

const QRcode = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.cardWrapper}>
        <div className={s.qrWrapper}><img className={s.qrCode} src='https://framerusercontent.com/images/nV4wQufvwVVUOaMi6uy8hDi3FFI.svg'></img></div>
        <div className={s.paraWrapper}>
            <div className={s.p1}>Insights every day
            </div>
            <div className={s.p2}>We try to publish content every day, so you will receive insights and/or interesting content regularly.
            </div>
        </div>
      </div>
    </div>
  )
}

export default QRcode
