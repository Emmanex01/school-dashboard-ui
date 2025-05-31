'use client'
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import InputField from '../InputField';
import { error } from 'console';
import { Label } from 'recharts';
import Image from 'next/image';

const StudentsForm = ({
    type, 
    data
    } : {
    type: string, 
    data: any
    }) => {

        const fileInputRef = useRef<HTMLInputElement>(null);

        const openFile = () => {
            fileInputRef.current?.click()
        }

        // create a schema using Zod object
        const teachersFormSchema = z.object({
            username: z.string()
                        .min(3,{message: 'teacherId must be at least 3 characters'})
                        .max(12,{message: 'teacherId must be at least 12 characters'}),
            email: z.string().min(1,{message: "Email is Required"}),
            password: z.string().min(1,{message: "Password is Required"}),
            firstName: z.string().min(1,{message: "First Name is Required"}),
            lastName: z.string().min(1,{message: "Last Name is Required"}),
            phone: z.string().min(1,{message: "Phone is Required"}),
            address: z.string().min(1,{message: "An address is Required"}),
            bloodType:z.string(),
            dateOfBirth: z.date({message: "Birthday is Required"}),
            sex: z.string(),
            photo: z.string()
        })

        // infer data types through Zod
        type teachersFormtype = z.infer<typeof teachersFormSchema>

        const { 
            register, 
            formState: {errors}, 
            handleSubmit
        } = useForm<teachersFormtype>({
            resolver : zodResolver(teachersFormSchema),
            // defaultValues: {
            //     teacherId: '',
            //     name: '',
            //     email: '',
            //     photo: '',
            //     phone: '',
            //     subjects: '',
            //     classes: '',
            //     grade:'',
            //     class: '',
            //     address: '',
            // }
        })


  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
        <div className=''>
            <h1 className='font-semibold my-4'>Create a new student</h1>
            <div className='text-gray-500 my-8'>Authentication information</div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
                <InputField 
                    name= 'username'
                    register={register}
                    error={errors?.username}
                    label='Username'
                    defaultValues={data?.username}
                />
                <InputField 
                    name= 'email'
                    type='email'
                    register={register}
                    error={errors?.email}
                    label='Email'
                    defaultValues={data?.email}
                />
                <InputField 
                    name= 'password'
                    type='password'
                    register={register}
                    error={errors?.password}
                    label='Password'
                    defaultValues={data?.password}
                />
            </div>
        </div>

        <div className='text-gray-500 my-8'>Authentication information</div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
                <InputField 
                    name= 'firstName'
                    register={register}
                    error={errors?.firstName}
                    label='First Name'
                    defaultValues={data?.firstName}
                />
                <InputField 
                    name= 'lastName'
                    register={register}
                    error={errors?.lastName}
                    label='Last Name'
                    defaultValues={data?.lastName}
                />

                <InputField 
                    name= 'phone'
                    register={register}
                    error={errors?.phone}
                    label='Phone'
                    defaultValues={data?.phone}
                />

                <InputField 
                    name= 'address'
                    register={register}
                    error={errors?.address}
                    label='Address'
                    defaultValues={data?.address}
                />

                <InputField 
                    name= 'bloodType'
                    register={register}
                    error={errors?.bloodType}
                    label='Blood Type'
                    defaultValues={data?.bloodType}
                />

                <InputField 
                    name= 'dateOfBirth'
                    type='date'
                    register={register}
                    error={errors?.dateOfBirth}
                    label='Date of Birth'
                    defaultValues={data?.dateOfBirth}
                />
            </div>
            <div className='flex justify-between mt-4 items-center'>
                <div className='flex flex-col'>
                    <label htmlFor="sex">Sex</label>
                    <select
                        id="sex" 
                        className='border-black border-1 ring-1 rounded-md ring-gray-400 w-full'
                        defaultValue="Male"
                        {...register("sex")}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {errors.sex?.message && <p className='text-red-600 text-sm'>{errors.sex?.message.toString()}</p>}
                </div>

                <div>
                    <label className='flex gap-2 items-center' onClick={openFile}>
                        <Image src='/upload.png' width={14} height={14} alt='uploadImage'/>
                        <span>upload image</span>
                    </label>
                    <input
                        type="file"
                        {...register("photo")}
                        className='hidden'
                        ref={fileInputRef}
                    />
                    {errors.photo?.message && <p className='text-red-600 text-sm'>{errors.photo.message.toString()}</p>}
                </div>
                
            </div>
            <button className='bg-blue-600 w-full rounded-md p-2 mt-4'>{type === 'create' ? "create" : "update"}</button>
    </form>
  )
}

export default StudentsForm
