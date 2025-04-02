import React from 'react'

const Button = ({colorName, setColor}) => {
  return (
    <button 
      className='px-5 py-3 rounded-full shadow-xl cursor-pointer' style={{backgroundColor: colorName}}
      onClick={() => {setColor(colorName)}}
      > {colorName} </button>
  )
}

export default Button
