import React from 'react'

const InputBox = ({name,type,placeholder,min,max,onChange,value}) => {
  return (
    <input className='border border-slate-500 p-1.5 rounded-sm' name={name} type={type} placeholder={placeholder} min={min} max={max} onChange={onChange} value={value}  required />
  )
}

export default InputBox