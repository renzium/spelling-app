import { useRouter } from 'next/router'
import React, { useState } from 'react'
import data from "../assets/data.json"
import Speaker from "./Say"

export default function Home() {
  const router = useRouter();
  const toggle = () => {
    let randomNum = Math.floor(Math.random() * 54)
  router.push(`/${data[randomNum]}`)
  }
  return (
    <div className='bg-gradient-to-br from-blue-300 to-blue-500 pb-5 h-screen text-white px-24   ' >
      <button onClick={toggle} className='bg-[#f7d78c] text-gray-900 px-8 py-2 rounded mx-auto block'>Show text</button>
    </div>
  )
}
