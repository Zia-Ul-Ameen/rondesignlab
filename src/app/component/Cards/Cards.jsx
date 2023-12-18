import React from 'react'
import s from './Cards.module.css'

const Cards = () => {
  return (
    <div className={s.columnFlexGap}>
        <div className={s.cardWrapper}>
            <div className={s.leftCard}>
                <div className={s.title}>Launching new products for enterprises</div>
                <div className={s.savings}>For the last 2 years we saved over <span className={s.highlight}> $11.000.000</span><br /> for our enterprise customers.</div>
            </div>
            <div className={s.rightCard}>
                <div className={s.customers}>$5M+</div>
                <div className={s.brand}>
                    <div className={s.brandLogo}>KOHLER</div>
                    <div className={s.brandTitle}>Acquisition of Kohler</div>
                </div>
                <div className={s.description}>Creating a new mobile <br /> app with an existing team <br /> in the company</div>
            </div>
        </div>

        <div className={s.cardWrapper2}>
            <div className={s.leftCard}>
                <div className={s.title}>We make money <br />for startups. <br />Series A - Series B</div>
                <div className={s.savings}>Last 3 years over<span className={s.highlight}>$120.000.000</span><br />client`s investment.</div>
            </div>
            <div className={s.rightCard}>
                <div className={s.customers}>$22M+</div>
                <div className={s.brand}>
                    <div className={s.brandLogo}>VESSEL</div>
                    <div className={s.brandTitle}>Acquisition of Vesselr</div>
                </div>
                <div className={s.description}>Rebranding 360</div>
            </div>
        </div>
    </div>
  )
}

export default Cards
