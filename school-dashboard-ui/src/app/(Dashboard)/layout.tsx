import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode} ) => {
  return (
    <div className='h-screen flex'>
        {/* Left */}
        <div className='w-[14%] md:w-[8%] lg:w-[14%]'>
            <Link href='/' className='flex justify-center items-center gap-2 lg:justify-start p-4'>
                <Image src="/logo.png" width={32} height={32} alt='Logo'/>
                <span className='hidden lg:block font-semibold'>EmmanexSch</span>
            </Link>
            <Menu/>
        </div>

        {/* Right */}
        <div className='w-[86%] md:w-[92%] lg:w-[86%] bg-slate-200 overflow-scroll p-4'>
          <Navbar/>
          {children}
        </div>
    </div>
  )
}

export default DashboardLayout
