import React from 'react'
import "./input.css"
import{IoIosArrowDown} from "react-icons/io"


function Input() {
  return (
    <div className="mila__input">
      <input placeholder='0' readonly="readonly"/>
      <button>Select token<IoIosArrowDown/></button>
    </div>
  )
}

export default Input;
