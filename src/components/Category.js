import React from 'react'
import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/img2.png";
import img3 from "../assets/Images/img3.png";
import img4 from "../assets/Images/img4.png";
import img5 from "../assets/Images/img5.png";
import img6 from "../assets/Images/img6.png";
import img7 from "../assets/Images/img7.png";
import img8 from "../assets/Images/img8.png";
import yellowRight from "../assets/Images/yellowRight.png"
const Category = () => {
	return (
		<div>
			<div className='ms-36 me-24 mt-20'>
				<h2 className='font-bold text-3xl lg:text-4xl text-[#2430A0]'>
					Browse by category
				</h2>

				<div className='flex flex-wrap justify-around mx-3 my-5 items-center'>
					<div className='w-full group md:w-48 items-center text-center mb-5 md:mb-0'>
						<img src={img1} alt="Img" className='rounded-lg w-56 transform transition-transform duration-300 group-hover:scale-105' />
						<h2 className='text-black font-semibold text-lg border-b-2 mx-7 pb-3 group-hover:text-[#2430A0] group-hover:border-[#2430A0] transition-colors duration-300'>Language</h2>
					</div>
					<div className='w-full group md:w-48 items-center text-center mb-5 md:mb-0'>
						<img src={img2} alt="Img" className='rounded-lg w-52 transform transition-transform duration-300 group-hover:scale-105' />
						<h2 className='text-black font-semibold text-lg border-b-2 pt-3 mx-7 pb-3 group-hover:text-[#2430A0] group-hover:border-[#2430A0] transition-colors duration-300'>Cooking</h2>
					</div>
					<div className='w-full group md:w-48 items-center text-center mb-5 md:mb-0'>
						<img src={img3} alt="Img" className='rounded-lg w-56 transform transition-transform duration-300 group-hover:scale-105' />
						<h2 className='text-black font-semibold text-lg border-b-2 mx-7 pb-3 group-hover:text-[#2430A0] group-hover:border-[#2430A0] transition-colors duration-300'>Music</h2>
					</div>
					<div className='w-full group md:w-48 items-center text-center mb-5 md:mb-0'>
						<img src={img4} alt="Img" className='rounded-lg w-56 transform transition-transform duration-300 group-hover:scale-105' />
						<h2 className='text-black font-semibold text-lg border-b-2 mx-7 pb-3 group-hover:text-[#2430A0] group-hover:border-[#2430A0] transition-colors duration-300'>Arts & Craft</h2>
					</div>
				</div>
				<div className='flex flex-wrap justify-around mx-3 my-5 items-center'>
					<div className='w-full group md:w-48 items-center text-center mb-5 md:mb-0'>
						<img src={img5} alt="Img" className='rounded-lg w-56 transform transition-transform duration-300 group-hover:scale-105' />
						<h2 className='text-black font-semibold text-lg border-b-2 mx-7 pb-3 group-hover:text-[#2430A0] group-hover:border-[#2430A0] transition-colors duration-300'>Yoga</h2>
					</div>
					<div className='w-full group md:w-48 items-center text-center mb-5 md:mb-0'>
						<img src={img6} alt="Img" className='rounded-lg w-56 transform transition-transform duration-300 group-hover:scale-105' />
						<h2 className='text-black font-semibold text-lg border-b-2 mx-7 pb-3 group-hover:text-[#2430A0] group-hover:border-[#2430A0] transition-colors duration-300'>Academics</h2>
					</div>
					<div className='w-full group md:w-48 items-center text-center mb-5 md:mb-0'>
						<img src={img7} alt="Img" className='rounded-lg w-56 transform transition-transform duration-300 group-hover:scale-105' />
						<h2 className='text-black font-semibold text-lg border-b-2 mx-7 pb-3 group-hover:text-[#2430A0] group-hover:border-[#2430A0] transition-colors duration-300'>Back to Roots</h2>
					</div>
					<div className='w-full group md:w-48 items-center text-center mb-5 md:mb-0'>
						<img src={img8} alt="Img" className='rounded-lg w-56 transform transition-transform duration-300 group-hover:scale-105' />
						<h2 className='text-black font-semibold text-lg border-b-2 mx-7 pb-3 group-hover:text-[#2430A0] group-hover:border-[#2430A0] transition-colors duration-300'>Funteresting</h2>
					</div>
				</div>
			</div>
			<div className='absolute right-0 '>
				<img src={yellowRight} className='w-28 h-96 -mt-28' alt='right' />
			</div>

		</div>
	)
}

export default Category