import React from 'react'
import { FaTachometerAlt, FaRegSun, FaChevronRight} from "react-icons/fa"

const Sidebar = () => {
    return (
        <div className='bg-[#523EC4] px-[25px] h-screen'>
            <div className='px-[15px] py-[20px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer flex text-center'>Admin Panel</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer px-[6px]'>
                <FaTachometerAlt color='white' />
                <p className='text-[16px] leading-[20px] font-bold text-white px-[10px]'>Grievance</p>
            </div>
            <div className='pt-[6px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaRegSun color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Logout</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar