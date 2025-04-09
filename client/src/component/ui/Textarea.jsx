import React from 'react'

const Textarea = ({name,onChange,value}) => {
  return (
    <textarea className='border border-slate-500 rounded-sm resize-none p-1.5' name={name} value={value} cols={10} rows={5} placeholder='Enter Address' onChange={onChange}></textarea>

  )
}

export default Textarea