import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import header1 from "../assets/Images/header1.png"
import header2 from "../assets/Images/header2.png"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className={`flex justify-between items-center py-3 relative ${isMenuOpen ? 'bg-[#E9EFFF]' : ''} `}>
			<div className='flex items-center'>
				<a href='/' className='mx-2 no-underline font-semibold text-2xl lg:ms-36  text-[#2430A0]'>
					Logo
				</a>
				<button className='lg:ms-10 font-semibold text-base lg:text-xl text-[#2430A0] py-1 lg:py-2 px-2 lg:px-4 hover:text-[#FB7356]' onClick={toggleMenu}>
					Categories {isMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
				</button>
				{isMenuOpen && (
					<div className='lg:absolute bg-[#E9EFFF] top-full min-w-full left-0 right-0 z-10'>
						<div className='lg:py-5 lg:ms-36 lg:me-28 flex flex-col lg:flex-row justify-between'>
							<div className='flex flex-col lg:flex-row'>
								<div className='lg:mr-10'>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Language
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Cooking
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Music
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Arts & Craft
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Yoga
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Academic
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Back to Roots
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Funteresting
									</a>
								</div>
								<div className='mx-10'>
									<h2 className='block py-2 text-[#2430A0] font-semibold '>
										All
									</h2>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Indian
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Norwegian
									</a>
									<a href='/' className='block py-2 text-[#2430A0] font-semibold hover:text-[#FB7356]'>
										Cate
									</a>
								</div>
							</div>
							<div className='relative items-center my-5 mx-2'>
								<img src={header2} alt='background' className='absolute inset-0 w-96 object-cover' />
								<img src={header1} alt='family' className='relative w-full object-cover' />
								<div className='absolute inset-0 mx-12 leading-10 text-center top-32 text-white'>
									<h2 className='text-4xl'>“Do anything, but let it produce joy.”</h2>
									<p>-Walt Whitman</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className='flex items-center me-2 lg:me-28'>
				<h4 className='mx-2 text-[#2430A0] font-semibold text-sm lg:text-base uppercase me-2 lg:me-4'>Teach</h4>
				<Divider orientation='vertical' variant='middle' flexItem className='lg:block mx-2' />
				<button className='text-[#2430A0] border-[1px] rounded-full text-sm lg:text-base border-[#2430A0] px-2 lg:px-4 py-1 font-bold mx-2'>
					Login
				</button>
				<button className='bg-[#2430A0] text-white rounded-full focus:outline-none text-sm lg:text-base px-2 lg:px-4 py-2 uppercase font-bold mx-2'>
					SignUp
				</button>
			</div>

		</div>
	);
};

export default Header;
