import React from 'react'
import "./mycomponent.css";
interface IButtonComponent {
    onClick?:() => void;
    label:string;
}
const ButtonComponent = ({onClick,label}:IButtonComponent) => {
  return (
    <button className='fetctBtn' onClick={onClick}>{label}</button>
  )
}

export default ButtonComponent