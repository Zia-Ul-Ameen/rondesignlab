import React from 'react'
import s from './BriefProposalContract.module.css'

const BriefProposalContract  = ({ scroll, prop1, prop2 }) => {
    const listOfView = [{ title:  'Brief',description: `You will get to know our team while we dive into project details for effective communication`, list: ['Our questionnaire','Introductory call','Project documentation'], imgSrc: 'https://framerusercontent.com/images/fxsTGaKydEpqcn3mfe3aFrSBS5Q.png?scale-down-to=512'},
     { title:  'Proposal',description: `You'll receive a detailed proposal with project goals and timeline to foster mutual understanding`, list: ['Budget','Team size','Timeline'], imgSrc: 'https://st2.depositphotos.com/3580719/10729/v/950/depositphotos_107294358-stock-illustration-seamless-background-with-simple-icons.jpg'},
     { title:  'Contract',description: `We coordinate all necessary documentation from both sides before the project starts for seamless collaboration`, list: ['Invoice and contract issuance','Making deposit','Start project'], imgSrc: 'https://img.freepik.com/premium-vector/art-tools-sketch-hand-drawn-set-vector-white-black-desing-art-background_610423-212.jpg?w=2000'} ]

  return (
    <div className={s.wrapper}>
      <div className={s.briefProposalContract}>
         {listOfView.map((item, i)=> (
             <div key={i}>
                    <img src={item.imgSrc} className={`${s.restImage} ${i == 0 ? s.noPadding : ""}`}/>
                    <p className={s.title} >{item.title}</p>
                    <p className={s.description}>
                     {item.description}</p>
                  <ul className={`${s.pros} ${i !== item.list.length-1 ? s.marginbtm : ""}`}>
                     {item.list.map((list, i)=> (<li key={i}  >{ list}</li>))}
                    </ul>
              </div>
         ))}
        </div>
      <div className={s.bgVectors}>
        {scroll < prop1 ? (<img src="https://framerusercontent.com/images/fxsTGaKydEpqcn3mfe3aFrSBS5Q.png?scale-down-to=512" className={ s.image1 }/>) : scroll > prop2 ? (<img src="/img10.avif" className={ s.image1 }/>) : (<img src="/img11.jpg" className={ s.image1 }/>)}
      </div>
    </div>
  )
}

export default BriefProposalContract 
