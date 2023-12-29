import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <div>
        <div className='w-[960px] h-[106px] flex rounded-md justify-around items-center mt-4 bg-white '>
            <div className='flex flex-col'>
              <div className='flex  items-center gap-2'>
                <p className='text-[#535D66] text-[14px]'>Total Portfolio Value</p>
                <CiCircleInfo />
              </div>
              <div>
                <p className='text-[24px] mt-2'>₹ 112,312.24</p>
              </div>
            </div>

            <div>
              <p className='text-[#535D66] text-[14px]'>Wallet Balances</p>
              <p className='text-[24px] mt-2'>22.39401000</p>
            </div>

            <div className='flex items-center gap-3 mt-5'>
              <p className='text-[24px]'>₹ 1,300.00</p>
              <p className='bg-[#F3F3F7] px-[6px] py-[4px] text-[#535D66]'>INR</p>
            </div>

            <div className=' flex gap-[50px]'>
              <button className='bg-[#5F00D9] py-[10px] px-[16px] rounded-[10px] text-white text-center flex items-center'><FaLongArrowAltDown /> Deposite</button>
              <button className='bg-[#5F00D9] py-[10px] px-[16px] rounded-[10px] text-white text-center flex items-center'><FaLongArrowAltUp /> Withdraw</button>
            </div>
        </div>
    </div>
  )
}

export default PortfolioSection