import React from 'react'

export default function Buttons({bgColor , color , size ,text , borderR , withd  }) {
  return (
  <button type='button' style={{backgroundColor : bgColor , color , borderRadius : borderR , width : withd  }} className={`text-${size} p-2 hover:drop-shadow-xl`}>
    {text}

  </button>
  )
}
