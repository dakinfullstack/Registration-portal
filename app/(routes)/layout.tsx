import React from 'react'
import Drawer from '../_component/layout/drawer';
import Navbar from '../_component/layout/navbar'

type Props = {children: React.ReactNode;}

export default function layout({children}: Props) {
  return (
    <div className="flex h-screen bg-orange-50">
    <Drawer />   
    
       <div className="flex-1 p-6">
       <Navbar />
{children}</div>
</div>
  )
}