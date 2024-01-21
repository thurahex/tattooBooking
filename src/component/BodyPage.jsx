
import React from 'react'
import Header from './ui/Header'
import Navbar from './ui/Navbar'
import Home from './page/Home'
import PickupForm from './core/PickupForm'
import Subheader from './core/Subheader'

export default function BodyPage() {
  return (

<>

<div className='max-w-[900px] mx-auto px-5 bg-black h-screen  '>
<Header />

<Subheader />

<PickupForm />

</div>

</>
    )
}
