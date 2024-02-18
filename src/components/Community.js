import React from 'react'
import community1 from "../assets/Images/community1.png"
import community2 from "../assets/Images/community2.png"
import community3 from "../assets/Images/community3.png"

const Community = () => {
	return (
		<div className='ms-36 me-24 mt-20'>
			<h2 className='font-bold text-4xl text-[#2430A0]'>Love from community</h2>
			<div class='flex flex-wrap justify-center md:justify-around mx-3 my-5 items-center'>
				<div className='text-center w-96 h-80 px-5 mx-3 rounded-md border-[1px] md:my-0 my-2 border-gray-300'>
					<div className='flex'>
						<span className='md:text-7xl text-4xl py-5 font-serif font-extrabold text-[#D3DEEC]'>“</span>
						<span><img src={community1} alt='community' className='md:ms-11 ms-0 mt-7' /></span>
					</div>
					<h2 className='font-semibold text-xl mt-3 text-[#A7A7A7]'>Karandeep</h2>
					<p className=' py-6 text-xs md:text-base text-[#4D4D4D]'>It is nice to be on an international platform where there are teachers from around the world.</p>
				</div>
				<div className='text-center w-96 h-80 px-5 mx-3 rounded-md border-[1px] border-gray-300 bg-[#2430A0]'>
					<div className='flex'>
						<span className='md:text-7xl text-4xl py-5 font-serif font-extrabold text-[#F2CDA0]'>“</span>
						<span><img src={community2} alt='community' className='md:ms-11 ms-0 mt-7' /></span>
					</div>
					<h2 className='font-semibold text-xl md:mt-3 text-[#FFFFFF]'>Kalpana</h2>
					<p className=' md:py-6 py-2 text-xs md:text-base text-[#FFFFFF]'>The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties.</p>
				</div>
				<div className='text-center w-96 h-80 px-5 mx-3 rounded-md border-[1px] md:my-0 my-2 border-gray-300'>
					<div className='flex'>
						<span className='md:text-7xl text-4xl py-5 font-serif font-extrabold text-[#D3DEEC]'>“</span>
						<span><img src={community3} alt='community' className='md:ms-11 ms-0 mt-7' /></span>
					</div>
					<h2 className='font-semibold text-xl mt-3 text-[#A7A7A7]'>Kirti</h2>
					<p className=' py-6 text-xs md:text-base text-[#4D4D4D]'>As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.</p>
				</div>
			</div>
		</div>
	)
}

export default Community