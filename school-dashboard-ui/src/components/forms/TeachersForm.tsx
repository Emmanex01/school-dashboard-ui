'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InputField from '../InputField';

const TeachersForm = ({
    type, 
    data
    } : {
    type: string, 
    data: any
    }) => {

        // create a schema using Zod object
        const teachersFormSchema = z.object({
            teacherId: z.string()
                        .min(3,{message: 'teacherId must be at least 3 characters'})
                        .max(12,{message: 'teacherId must be at least 12 characters'}),
            name: z.string(),
            email: z.string(),
            photo: z.string(),
            phone: z.string(),
            subjects: z.string(),
            classes: z.string(),
            grade:z.string(),
            class: z.string(),
            address: z.string(),
        })

        // infer data types through Zod
        type teachersFormtype = z.infer<typeof teachersFormSchema>

        const { 
            register, 
            formState: {errors}, 
            handleSubmit
        } = useForm<teachersFormtype>({
            resolver : zodResolver(teachersFormSchema),
            defaultValues: {
                teacherId: '',
                name: '',
                email: '',
                photo: '',
                phone: '',
                subjects: '',
                classes: '',
                grade:'',
                class: '',
                address: '',
            }
        })
  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
        <div className=''>
            <h1 className='font-semibold my-4'>Create a new teacher</h1>
            <div className='text-gray-500 my-8'>Authentication information</div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' htmlFor="teacherId">TeacherId</label>
                    <input 
                        id="teacherId" 
                        {...register('teacherId')} 
                        className='outline-none border-[1px] border-gray-400 rounded-md'
                    />
                    {errors?.teacherId?.message && <p className='text-red-600 text-sm'>{errors.teacherId.message}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' htmlFor="teacherId">Name</label>
                    <input 
                        id="name" 
                        {...register('name')} 
                        className='outline-none border-[1px] border-gray-400 rounded-md'
                    />
                    {errors?.name?.message && <p className='text-red-600 text-sm'>{errors.name.message}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        {...register('email')} 
                        className='outline-none border-[1px] border-gray-400 rounded-md'
                    />
                    {errors?.email?.message && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                </div>
            </div>
        </div>

        <div className='text-gray-500 my-8'>Authentication information</div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' htmlFor="teacherId">TeacherId</label>
                    <input 
                        id="teacherId" 
                        {...register('teacherId')} 
                        className='outline-none border-[1px] border-gray-400 rounded-md'
                    />
                    {errors?.teacherId?.message && <p className='text-red-600 text-sm'>{errors.teacherId.message}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' htmlFor="teacherId">Name</label>
                    <input 
                        id="name" 
                        {...register('name')} 
                        className='outline-none border-[1px] border-gray-400 rounded-md'
                    />
                    {errors?.name?.message && <p className='text-red-600 text-sm'>{errors.name.message}</p>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='text-gray-400' htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        {...register('email')} 
                        className='outline-none border-[1px] border-gray-400 rounded-md'
                    />
                    {errors?.email?.message && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                </div>
            </div>
            <button className='bg-blue-600 w-full rounded-md p-2 mt-4'>{type === 'create' ? "create" : "update"}</button>
    </form>
  )
}

export default TeachersForm
