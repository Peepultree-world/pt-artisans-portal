import Image from 'next/image'
import React from 'react'
import Search_Icon from "../../../../assets/Search_Icon_Box.svg";
import Close_Icon_SC from "../../../../assets/Close_Icon_SC.svg";

export default function Search({setSearchText, searchText}) {
  return (
        <div className='flex w-full justify-between align-middle items-center'>
        <div className="relative text-gray-400 focus-within:text-gray-600 block w-full">
            <Image className="pointer-events-none w-[24px] h-[20px] absolute top-1/2 transform -translate-y-1/2 left-3 border-r-[1px] border-Border-primary pr-1" src={Search_Icon} alt='Search'/>
            <input className='h-[42px] border border-Border-primary rounded-[2px] w-full pl-12' placeholder='Search by PO, product name or SKU ID'
            onChange={(e)=>{setSearchText(e.target.value)}}/>
            {searchText && <button onClick=(()=>{setSearchText(undefined)})><Image className="pointer-events-none w-[20px] h-[20px] absolute top-1/2 transform -translate-y-1/2 right-3" src={Close_Icon_SC} alt='Close'/> </button>}
        </div>
        </div>
  )
}
