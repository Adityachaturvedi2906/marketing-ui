import React from 'react'
import homeImg1 from '../assets/Images/top2.png'
import homeBg1 from '../assets/Images/homeBg.png'
import point from "../assets/Images/point.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Certified = () => {
	return (
		<div className='flex justify-between items-center ms-28 me-20 mt-20'>
			<div className='relative items-center'>
				<img src={homeBg1} alt='background' className='absolute inset-0 w-full h-full object-cover rounded-lg' />
				<img src={homeImg1} alt='family' className='relative w-full h-full object-cover rounded-lg' />
			</div>
			<div className='mx-16 w-96'>
				<h2 className='font-bold text-4xl text-[#2430A0] leading-normal py-2'>Become a certified teacher</h2>
				<p className='text-sm py-5 text-[#51557D]'>We only have the best and trusted teachers from the globe. Join us if you have the skill and passion to share it.</p>
				<div className='flex items-baseline'>
					<img src={point} className='w-2 h-2' alt="point" />
					<p className='px-2 text-sm my-2 text-[#51557D]'>Make your own schedule</p>
				</div>
				<div className='flex items-baseline'>
					<img src={point} className='w-2 h-2' alt="point" />
					<p className='px-2 text-sm my-2 text-[#51557D]'>Teach students on an international platform</p>
				</div>
				<div className='flex items-baseline'>
					<img src={point} className='w-2 h-2' alt="point" />
					<p className='px-2 text-sm my-2 text-[#51557D]'>Become part of an international community of passionate educators</p>
				</div>
				<button className='absolute bg-[#2430A0] text-white rounded-full px-6 my-5 text-sm w-max py-2 items-center uppercase font-semibold '>
					<span>Start Teaching</span> <span className='ps-2'><ArrowForwardIcon sx={{ fontSize: 15 }} /></span>
				</button>
			</div>
		</div>
	)
}

export default Certified