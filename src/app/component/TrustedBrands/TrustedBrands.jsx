import React from 'react'
import s from './TrustedBrands.module.css'


const TrustedBrands = () => {
    const brands = [{brandName: 'Samsung,', bgcolor: 'rgba(7, 94, 216, 0.927)',forImage: 'Samsung'}, 
    {brandName: 'Huawei,', bgcolor: 'rgb(236, 38, 38)',forImage: 'Huawei'},
    {brandName: 'Kohler,', bgcolor: '#056',forImage: 'Kohler'},
    {brandName: 'Vessel,', bgcolor: 'rgba(199, 192, 192, 0.804',forImage: 'Vessel'},
    {brandName: 'Colgate,', bgcolor: 'red',forImage: 'Colgate'},
    {brandName: 'Fox Sports,', bgcolor: 'rgba(99, 121, 137, 0.804)',forImage: 'Fox Sports'},
    {brandName: 'Ford', bgcolor: 'rgba(11, 174, 228, 0.804)',forImage: 'Ford'}]

  return (
    <div className={s.wrapper}><div className={s.p1Wrapper}>
    <div className={s.text}>
Since 2015, our solutions have been trusted by <br />
{brands.map((brand, i)=> (<div className={s.brandWrapper} key={i}><div className={s.bg1} style={{backgroundColor:`${brand.bgcolor}`}}>{brand.forImage}</div>{brand.brandName}</div>))}
</div>
</div>
</div>
  )
}

export default TrustedBrands
