import React from 'react'
import reason1 from "../assets/Images/reason1.png"
import reason2 from "../assets/Images/reason2.png"
import reason3 from "../assets/Images/reason3.png"
import reason4 from "../assets/Images/reason4.png"
import reason5 from "../assets/Images/reason5.png"
import reason6 from "../assets/Images/reason6.png"

const Reasons = () => {
	return (
		<div className='ms-36 me-24 mt-20'>
			<h2 className='font-bold text-3xl md:text-4xl text-[#2430A0]'>Six reasons to choose our class</h2>
			<div className='flex flex-wrap justify-around items-center py-5'>
				<div className='w-full md:w-64 mb-5 md:mb-0 text-center'>
					<img src={reason1} alt='reason' className='mb-3 md:mx-0 mx-auto' />
					<h2 className='font-semibold text-[#1B1F49]'>Interactive live online classes at your convenient time slots</h2>
				</div>
				<div className='w-full md:w-64 mb-5 md:mb-0 text-center'>
					<img src={reason2} alt='reason' className='mb-3 md:mx-0 mx-auto' />
					<h2 className='font-semibold text-[#1B1F49]'>Learning from passionate, talented and trusted teachers</h2>
				</div>
				<div className='w-full md:w-64 text-center'>
					<img src={reason3} alt='reason' className='mb-3 md:mx-0 mx-auto' />
					<h2 className='font-semibold text-[#1B1F49]'>Cross country sharing of interesting and unique hobbies from across the world</h2>
				</div>
			</div>

			<div className='flex flex-wrap justify-around items-center py-5'>
				<div className='w-full md:w-64 mb-5 md:mb-0 text-center'>
					<img src={reason4} alt='reason' className='mb-3 md:mx-0 mx-auto' />
					<h2 className='font-semibold text-[#1B1F49]'>Interactive live online classes at your convenient time slots</h2>
				</div>
				<div className='w-full md:w-64 mb-5 md:mb-0 text-center'>
					<img src={reason5} alt='reason' className='mb-3 md:mx-0 mx-auto' />
					<h2 className='font-semibold text-[#1B1F49]'>Learning from passionate, talented and trusted teachers</h2>
				</div>
				<div className='w-full md:w-64 text-center'>
					<img src={reason6} alt='reason' className='mb-3 md:mx-0 mx-auto' />
					<h2 className='font-semibold text-[#1B1F49]'>Cross country sharing of interesting and unique hobbies from across the world</h2>
				</div>
			</div>

		</div>
	)
}

export default Reasons