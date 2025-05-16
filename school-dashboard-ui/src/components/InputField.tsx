import React from 'react'

const InputField = ({
    name,
    type,
    register,
    errors,
    label,
    } : {
    name: string,
    type?: string,
    register:any,
    errors?: string,
    label: string,
    }) => {
  return (
    <div className='flex flex-col gap-1'>
        <label className='text-gray-400' htmlFor={name}>{label}</label>
        <input 
            id={name}
            type={type}
            {...register({name})} 
            className='outline-none border-[1px] border-gray-400 rounded-md'
        />
        {errors && <p className='text-red-600 text-sm'>{errors}</p>}
    </div>
  )
}

export default InputField
