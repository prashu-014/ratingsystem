import React from 'react'

const Button = ({name,style}) => {
  return (
    <button className={`${style} rounded-sm font-bold text-white p-2`}>
    {name}
  </button>
  )
}

export default Button