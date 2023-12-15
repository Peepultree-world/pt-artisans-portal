"use client";
import React, { useState, useEffect } from 'react'
import Nav from '../components/Organisms/HomeComponents/NavBar/Nav'
import Search from '../components/Organisms/HomeComponents/SearchBox/Search';

export default function home() {
    const [searchActive, setSearchActive] = useState(false);
    const [searchText, setSearchText] = useState();

    useEffect(()=>{
        console.log(searchText);
    },[searchText])

    function getSearchBox() {
        return(searchActive && <Search searchText={searchText} setSearchText={setSearchText}/>)
    }

  return (
    <div className="min-h-screen h-full max-w-md px-[22px] lg:mx-auto justify-start align-middle items-center bg-Background-primary text-center flex flex-col">
        <Nav searchActive={searchActive} setSearchActive={setSearchActive}/>
        {getSearchBox()} 
    </div>
  )
}
