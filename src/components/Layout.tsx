import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { ToastContainer } from 'react-toastify';

type Props = {}

export default function Layout({}: Props) {
  return (
    <div
    className='px-5'

    style={{
        width:window.innerWidth
    }}
    ><Header/>
    
    <Outlet />
    <ToastContainer />

    </div>
  )
}