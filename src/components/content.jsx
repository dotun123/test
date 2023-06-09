import React, { useState } from 'react'
import "./content.css"
import Input from './input';
import {BsFillFileArrowDownFill,BsFillFileArrowUpFill} from "react-icons/bs"
import {FiSettings} from "react-icons/fi"
import{RxDot} from "react-icons/rx"

const Content = () => {
 const[arrow,setArrow]=useState(false)


    return (
    <div className="mila__content ">
    <div className='card'>
    <p><RxDot/>Swap</p>
    <p> <RxDot/>Buy</p>
    
    <div className='settings'>
   
    <FiSettings  size={20}/>
   
    </div>
   <Input/>
   <div  className="mila__arrow">
   {arrow
          ? <BsFillFileArrowDownFill color="black" size={20} onClick={() => setArrow(false)} />
          : <BsFillFileArrowUpFill color="var(--color-content)" size={20} onClick={() => setArrow(true)} />}
   </div>
   <Input/>
   
   <button type='botton' className='btn'>Connect</button>
   
   </div>
</div>
     
   
  )
}

export default Content;
