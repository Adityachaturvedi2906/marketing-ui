import React from 'react';
import heart from '../assets/Images/heart.png';
import homeImg from '../assets/Images/homeImg.png';
import homeBg from '../assets/Images/homeBg.png';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {
	return (
		<div className='md:flex justify-between items-center my-10 ms-2 md:ms-36'>
			<div className='md:mx-0 mx-auto mb-8'>
				<div className='flex items-center'>
					<h4 className='medium-text2 font-semibold text-xl text-[#2430A0]'>Hobbies</h4>
					<img src={heart} className='w-10 h-10 mx-1' alt='heart' />
					<h4 className='font-semibold text-xl text-[#2430A0]'>Happiness</h4>
					<img src={heart} className='w-10 h-10 mx-1' alt='heart' />
					<h4 className='font-semibold text-xl text-[#2430A0]'>Home</h4>
				</div>
				<p className='text-[#2430A0] px-2 pt-2 text-base'>
					A Nordic startup which brings incredibly interesting hobbies from around the world to people of all ages.
				</p>
				<div className='relative mx-2 my-5 flex items-center text-center'>
					<input
						placeholder='Enter your email'
						className='border-[1px] border-[#51557D] rounded-full px-4 py-[7px] text-sm w-60'
					/>
					<button className='absolute bg-[#2430A0] text-white rounded-full px-5 text-sm w-max py-2 uppercase font-semibold ml-44'>
						Start Exploring <ArrowForwardIcon sx={{ fontSize: 15 }} />
					</button>
				</div>
			</div>

			<div className='relative w-11/12 h-full items-center'>
				<img src={homeBg} alt='background' className='absolute inset-0 w-full h-full object-cover rounded-lg' />
				<img src={homeImg} alt='family' className='relative w-full h-full object-cover rounded-lg hidden md:block' />
			</div>

			<div className='fixed bottom-4 right-4 md:right-16 z-10'>
				<button className='bg-[#2430A0] text-white font-bold p-2 md:p-3 rounded-full'>
					<ForumIcon />
				</button>
			</div>
		</div>
	);
};

export default Home;
