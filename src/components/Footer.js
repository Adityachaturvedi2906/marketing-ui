import React from 'react'
import footer from "../assets/Images/footer.png"
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
	return (
		<div className='bg-[#F4F7FA] md:text-left text-center'>
			<div className='ms-4 md:mx-0 mx-auto md:ms-36 me-4 md:me-24'>
				<div className='flex flex-col md:flex-row justify-between py-7'>
					<div>
						<h2 className='text-xl text-[#2430A0] mb-2 font-semibold'>Class Categories</h2>
						<span className='text-[#51557D] font-medium flex flex-col text-sm leading-6'>
							<a href="/" className='hover:underline'>Language</a>
							<a href="/" className='hover:underline'>Cooking</a>
							<a href="/" className='hover:underline'>Music</a>
							<a href="/" className='hover:underline'>Arts & Craft</a>
							<a href="/" className='hover:underline'>Yoga</a>
							<a href="/" className='hover:underline'>Academic</a>
							<a href="/" className='hover:underline'>Back to roots</a>
							<a href="/" className='hover:underline'>funteresting</a>
						</span>
					</div>
					<div>
						<h2 className='text-xl text-[#2430A0] mb-2 font-semibold'>company</h2>
						<span className='text-[#51557D] flex flex-col font-medium text-sm leading-6'>
							<a href="/" className='hover:underline'>About</a>
							<a href="/" className='hover:underline'>Careers</a>
							<a href="/" className='hover:underline'>Blog</a>
							<a href="/" className='hover:underline'>Contact</a>
							<a href="/" className='hover:underline'>Privacy Policy</a>
							<a href="/" className='hover:underline'>Academic</a>
							<a href="/" className='hover:underline'>Terms & Conditions</a>
							<a href="/" className='hover:underline'>Refund Policy</a>
						</span>
					</div>
					<div>
						<h2 className='text-xl text-[#2430A0] mb-2 font-semibold'>Learn</h2>
						<span className='text-[#51557D] flex flex-col font-medium text-sm leading-6'>
							<a href="/" className='hover:underline'>All Classes</a>
						</span>
					</div>
					<div>
						<h2 className='text-xl text-[#2430A0] mb-2 font-semibold'>Teach</h2>
						<span className='text-[#51557D] flex flex-col font-medium text-sm leading-6'>
							<a href="/" className='hover:underline'>Become A Teacher</a>
						</span>
					</div>
					<div className='md:mx-0 mx-auto'>
						<img src={footer} alt="footer" />
						<h2 className='uppercase bg-white rounded-b-lg md:w-full w-72 text-[#2430A0] text-center py-1 text-sm font-semibold'>Sell Your Products With US</h2>
					</div>
				</div>
				<div>
					<Divider />
				</div>
				<div className='flex flex-col md:flex-row justify-between py-3'>
					<div>
						<h2 className='text-sm text-[#51557D]'>© Project 2021. All rights reserved.</h2>
					</div>
					<div>
						<h2 className='text-sm text-[#51557D]'>Made with by <FavoriteIcon fontSize="small" sx={{ color: red[[500]] }} /> SimplePlan</h2>
					</div>
					<div>
						<button className='px-2 text-[#51557D]' ><FacebookIcon fontSize='small' /></button>
						<button className='px-2 text-[#51557D]' ><InstagramIcon fontSize='small' /></button>
						<button className='px-2 text-[#51557D]' ><LinkedInIcon fontSize='small' /></button>
						<button className='px-2 text-[#51557D]' ><TwitterIcon fontSize='small' /></button>
						<button className='px-2 text-[#51557D]' ><YouTubeIcon fontSize='small' /></button>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer