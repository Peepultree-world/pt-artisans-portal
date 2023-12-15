"use client";
import React from 'react'
import Nav from '../components/Organisms/HomeComponents/NavBar/Nav'
import Search from '../components/Organisms/HomeComponents/SearchBox/Search';

export default function home() {
  return (
    <div className="min-h-screen h-full max-w-md px-[22px] lg:mx-auto justify-start align-middle items-center bg-Background-primary text-center flex flex-col">
        <Nav/>
        <Search/>
    </div>
  )
}
