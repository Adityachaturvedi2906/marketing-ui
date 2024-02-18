import React from 'react'
import rectangle1 from "../assets/Images/Rectangle1.png"
import rectangle2 from "../assets/Images/Rectangle2.png"
import rectangle3 from "../assets/Images/Rectangle3.png"
import Divider from '@mui/material/Divider';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
const Blogs = () => {
	return (
		<div className='ms-36 me-24 mt-20'>
			<div className='flex items-center md:items-baseline'>
				<div>
					<h2 className='font-bold text-4xl text-[#2430A0]'>Our blogs</h2>
				</div>
				<div className='ms-8'>
					<a href="/" className='uppercase underline text-sm font-semibold text-[#E25753]'>Show All</a>
				</div>
			</div>

			<div>
				<div className='my-10 flex flex-col md:flex-row justify-center md:justify-between'>
					<div className='rounded-lg border-[1px] p-3 block max-w-[350px]'>
						<div className='flex justify-between mx-4 absolute'>
							<div><h2 className='bg-[#FFF0F4] text-[#E25753] -ms-2 my-4 px-3 rounded-sm text-xs py-1 uppercase font-bold'>Category 01</h2></div>
						</div>
						<img src={rectangle1} alt='cardimage' className='' />
						<div>
							<h4 className='text-black font-semibold me-3 py-2'>Blog name - Lorem ipsum dolor sit amet, et varius et consectetur</h4>
							<p className='text-sm text-[#51557D] me-3 py-2'>Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...</p>
						</div>
						<div className='my-2'>
							<Divider />
						</div>
						<div className='flex justify-between text-white rounded-b-lg me-3'>
							<div className='font-semibold text-xs text-[#2430A0]'>Publisher name</div>
							<div className='text-[#1C1C1C] text-xs'><MapsUgcRoundedIcon fontSize="extra-small" /> 0</div>
						</div>
					</div>
					<div className='rounded-lg border-[1px] p-3 block max-w-[350px]'>
						<div className='flex justify-between mx-4 absolute'>
							<div><h2 className='bg-[#FFF0F4] text-[#E25753] -ms-2 my-4 px-3 rounded-sm text-xs py-1 uppercase font-bold'>Category 03</h2></div>
						</div>
						<img src={rectangle2} alt='cardimage' className='' />
						<div>
							<h4 className='text-black font-semibold me-3 py-2'>Blog name - Lorem ipsum dolor sit amet, et varius et consectetur</h4>
							<p className='text-sm text-[#51557D] me-3 py-2'>Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...</p>
						</div>
						<div className='my-2'>
							<Divider />
						</div>
						<div className='flex justify-between text-white rounded-b-lg me-3'>
							<div className='font-semibold text-xs text-[#2430A0]'>Publisher name</div>
							<div className='text-[#1C1C1C] text-xs'><MapsUgcRoundedIcon fontSize="extra-small" /> 12</div>
						</div>
					</div>
					<div className='rounded-lg border-[1px] p-3 block max-w-[350px]'>
						<div className='flex justify-between mx-4 absolute'>
							<div><h2 className='bg-[#FFF0F4] text-[#E25753] -ms-2 my-4 px-3 rounded-sm text-xs py-1 uppercase font-bold'>Category 02</h2></div>
						</div>
						<img src={rectangle3} alt='cardimage' className='' />
						<div>
							<h4 className='text-black font-semibold me-3 py-2'>Blog name - Lorem ipsum dolor sit amet, et varius et consectetur</h4>
							<p className='text-sm text-[#51557D] me-3 py-2'>Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...</p>
						</div>
						<div className='my-2'>
							<Divider />
						</div>
						<div className='flex justify-between text-white rounded-b-lg me-3'>
							<div className='font-semibold text-xs text-[#2430A0]'>Publisher name</div>
							<div className='text-[#1C1C1C] text-xs'><MapsUgcRoundedIcon fontSize="extra-small" /> 0</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blogs