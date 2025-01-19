"use client"
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className='grid place-items-center gap-10'>
        <Image className='mt-10' src="https://i.pinimg.com/236x/5b/b0/f7/5bb0f73a7b3e0f976acad614a42e5040.jpg" height={200} width={200} objectFit='contain' alt='logo' />
        <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
    </div>
  )
}

export default Login