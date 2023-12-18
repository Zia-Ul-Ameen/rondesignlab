'use client'
import React, { useState } from 'react'
import s from './Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
const [currentSelected, setCurrentSelected ] = useState({cList: '', cLogo: true});
const [menuActive, setMenuActive] = useState(false);

const lists = [{name: 'Trail', href: '/trail'},{name: 'About us', href: '/about'},{name: 'Say Hello👋', href: '/user-details'}]   


  return (
    <div className={s.navbar}>
        <div className={s.navImg}>
        <div className={s.menubar} onClick={()=> setMenuActive(!menuActive)}>
            <div className={s.line}></div>
            <div className={s.line}></div>
            <div className={s.line}></div>
          </div>
          {menuActive && (
          <div className={s.restDiv}>
            <ul>
            <p className={s.restX} onClick={()=> setMenuActive(!menuActive)}>X</p>
              {lists.map((list)=>(<li className={s.restList}>{list.name}</li>))}
            </ul>
            <div className={s.restEstimateBorder}>Get Free Estimate</div>
          </div>)}
          


        <Link href='/'><div className={s.image} onClick={()=> setCurrentSelected({...currentSelected, cLogo: true})}></div></Link>
            <ul>
              {lists.map((list, i)=> 
                  (<Link href={list.href}  key={i} >
                      <li  key={i} onClick={()=> setCurrentSelected({...currentSelected, cList: list.name, cLogo: false})} 

                            className={`${s.listStyle}
                            ${currentSelected.cLogo != true && currentSelected.cList == list.name ? s.activate : ''}`}>

                            {list.name}

                      </li>
                    </Link>))}
            </ul>
        </div>
        <ul><Link href='/user-details'><li className={s.estimateBorder}>Get Free Estimate</li></Link></ul>
        </div>
  ) 
}

export default Navbar
