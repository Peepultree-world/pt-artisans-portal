import Image from 'next/image'
import Button from './components/Button/Button'
import PT_Logo from './assets/PT_Logo.svg'
import Login_Asset from './assets/Login_Asset.svg'
import { BUTTON_TYPE } from './utils/constants'

export default function Home() {
  return (
    <div className='h-full max-w-md mx-5 lg:mx-auto justify-center mt-10 align-middle items-center text-center flex flex-col'>
      <Image src={PT_Logo} alt='logo'/>
      <Image className='mt-4' src={Login_Asset} alt='logo'/>
      <input className='' placeholder='Enter Mobile number' />
      <Button
            disabled={false}
            btnText={"Get OTP"}
            // type="submit"
            btnType={BUTTON_TYPE.PRIMARY}
            customClass={"w-full"}
          />
    </div>
  )
}
