import React, { useState } from 'react'
import Button from './Button';

const App = () => {
  let [color, setColor] = useState("#0f0f0f");

  let colors = ["red", "yellow", "pink", "green", "blue", "brown", "black", "olive", "grey", "crimson"]
  return (
    <>
     <div className='w-full h-screen' style={{backgroundColor : color}}></div>
     <div className="fixed flex flex-wrap px-5 py-3 rounded-full bottom-10 left-xl bg-white gap-2">
      {colors.map((item, index)=>{
        return <Button colorName={item} key={index} setColor={setColor}/>
      })}
     </div>
    </>
  )
}

export default App
