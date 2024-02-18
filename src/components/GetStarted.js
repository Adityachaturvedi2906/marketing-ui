import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const GetStarted = () => {

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div>
			<div className='ms-6 md:ms-36 me-6 md:me-24 bg-[#FB7356] rounded-full py-8 md:py-10 px-10 my-8 md:my-16'>
				<div className='text-center mx-auto'>
					<h2 className='text-white md:w-6/12 md:mx-auto mx-0  font-bold text-2xl md:text-4xl'>Start learning new skills today and pursue your passion </h2>
					<p className='text-white py-2 md:py-4'>Join the community of global learners and start exploring today.</p>
					<div className='w-10/12 md:w-9/12 md:flex mx-auto'>
						<input
							placeholder='Enter your email'
							className='border-[1px] border-white bg-[#FB7356] placeholder-white text-white rounded-full px-4 me-2 py-2 text-xs md:text-sm w-full'
						/>
						<button className='block md:inline-block mt-2 md:mt-0 text-[#FB7356] bg-white rounded-full px-5 text-sm py-2 uppercase font-bold w-full md:w-1/4'>
							Get Started <ArrowForwardIcon sx={{ fontSize: 15 }} />
						</button>
					</div>
				</div>
			</div>
			<div className='relative'>
				<button
					className="absolute bottom-4 right-4 md:right-8 bg-white text-[#2430A0] border-2 border-[#2430A0] p-1 rounded-full transition-transform duration-300 ease-in-out focus:outline-none "
					onClick={scrollToTop}
				>
					<ExpandLessIcon sx={{ fontSize: 35 }} />
				</button>
			</div>
		</div>
	)
}

export default GetStarted;
