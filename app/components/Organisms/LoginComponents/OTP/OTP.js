"use client";
import Button from '@/app/components/Atoms/Button/Button'
import { BUTTON_TYPE } from '@/app/lib/constants'
import React from 'react'
import OTPInput from 'react-otp-input'

export default function OTP() {
  return (
    <div className='mt-[81px] w-full'>
      <span className='font-bold text-lg'>Enter OTP</span>
    <OTPInput
      value={'----'}
      onChange={()=>{}}
      containerStyle={{
        marginTop: '35px',
        marginBottom: '31px',
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
      }}
      inputStyle={{
        border: "1px solid #E3E3E3",
        width: '60px',
        height: '70px',
        borderRadius: '9px',
        boxShadow: '-2px 3px 2px 2px #c2c1bd'
      }}
      numInputs={4}
      renderInput={(props) => <input {...props} />}
    />
        <Button
        disabled={false}
        btnText={"Login"}
        // type="submit"
        btnType={BUTTON_TYPE.PRIMARY}
        className={"w-full mb-[30px]"}
      />
        <a className='text-lg font-normal underline'>RESEND<span className='text-Text-tertiary underline'> 0:30</span></a>

    </div>
  )
}
