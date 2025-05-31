import React from 'react'
import {FieldError} from 'react-hook-form'

const InputField = ({
    name,
    type = "text",
    register,
    error,
    label,
    defaultValues,
    inputProps
    } : {
    name: string,
    type?: string,
    register:any,
    error?: FieldError,
    label: string,
    defaultValues?: any,
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
    }) => {
  return (
    <div className='flex flex-col gap-1'>
        <label className='text-gray-400' htmlFor={name}>{label}</label>
        <input 
            id={name}
            type={type}
            {...register(name)} 
            className='outline-none border-[1px] border-gray-400 rounded-md'
            {...inputProps}
            defaultValue={defaultValues}
        />
        {error?.message && <p className='text-red-600 text-sm'>{error.message.toString()}</p>}
    </div>
  )
}

export default InputField
