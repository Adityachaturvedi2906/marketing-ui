import React from 'react';
import cardImg from "../assets/Images/cardImg.png"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const Cards = () => {
	const button2Color = {
		color: '#E25753',
	}
	return (
		<div className='md:ms-36 md:me-24 flex flex-wrap md:flex-nowrap justify-around'>
			<div className='rounded-lg block md:min-w-72 min-w-72 md:w-60 mx-3 mb-5'>
				<div className='flex justify-between mx-4 absolute'>
					<div>
						<h2 className='bg-white text-[#2430A0] -ms-2 my-4 px-3 rounded-sm text-sm py-1 font-bold'>60% OFF</h2>
					</div>
					<div>
						<button className='bg-white ms-36 my-4 text-black px-1 rounded-sm py-1'>
							<BookmarkBorderIcon />
						</button>
					</div>
				</div>
				<img src={cardImg} alt='cardimage' className='min-w-72 md:w-60' />
				<div className='bg-[#E9EFFF]'>
					<h2 className='text-[#2430A0] font-semibold uppercase mx-3 py-3'>Language</h2>
					<h4 className='text-black font-semibold mx-3 py-1'>Class name - Lorem ipsum sit elit varsit lectusi sit amet</h4>
					<p className='ms-3 text-[#7B7B7B] text-sm'>by <span className='font-semibold'>John Doe</span></p>
					<p className='text-sm text-[#3E3E3E] mx-3 py-4'>Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...</p>
				</div>
				<div className='font-semibold flex justify-between text-white bg-[#2430A0] px-4 py-2 rounded-b-lg'>
					<div>kr1000 <span className="ms-1 font-light text-sm text-[#BEC4FF] top-0 left-0 w-full h-full line-through"> kr2000</span> </div>
					<div><button>Enroll now</button></div>
				</div>
			</div>

			<div className='rounded-lg block md:min-w-72 min-w-72 md:w-60  mx-3 mb-5'>
				<div className='flex justify-between mx-4 absolute'>
					<div>
						<h2 className='bg-white text-[#2430A0] -ms-2 my-4 px-3 rounded-sm text-sm py-1 font-bold'>60% OFF</h2>
					</div>
					<div>
						<button className='bg-white ms-36 my-4 text-black px-1 rounded-sm py-1'>
							<BookmarkIcon style={button2Color} />
						</button>
					</div>
				</div>
				<img src={cardImg} alt='cardimage' className='min-w-72 md:w-60' />
				<div className='bg-[#E9EFFF]'>
					<h2 className='text-[#2430A0] font-semibold uppercase mx-3 py-3'>Language</h2>
					<h4 className='text-black font-semibold mx-3 py-1'>Class name - Lorem ipsum sit elit varsit lectusi sit amet</h4>
					<p className='ms-3 text-[#7B7B7B] text-sm'>by <span className='font-semibold'>John Doe</span></p>
					<p className='text-sm text-[#3E3E3E] mx-3 py-4'>Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...</p>
				</div>
				<div className='font-semibold flex justify-between text-white bg-[#2430A0] px-4 py-2 rounded-b-lg'>
					<div>kr1000 <span className="ms-1 font-light text-sm text-[#BEC4FF] top-0 left-0 w-full h-full line-through"> kr2000</span> </div>
					<div><button>Enroll now</button></div>
				</div>
			</div>
			<div className='rounded-lg block md:min-w-72 min-w-72 md:w-60  mx-3 mb-5'>
				<div className='flex justify-between mx-4 absolute'>
					<div>
						<h2 className='bg-white text-[#2430A0] -ms-2 my-4 px-3 rounded-sm text-sm py-1 font-bold'>60% OFF</h2>
					</div>
					<div>
						<button className='bg-white ms-36 my-4 text-black px-1 rounded-sm py-1'>
							<BookmarkBorderIcon />
						</button>
					</div>
				</div>
				<img src={cardImg} alt='cardimage' className='min-w-72 md:w-60' />
				<div className='bg-[#E9EFFF]'>
					<h2 className='text-[#2430A0] font-semibold uppercase mx-3 py-3'>Language</h2>
					<h4 className='text-black font-semibold mx-3 py-1'>Class name - Lorem ipsum sit elit varsit lectusi sit amet</h4>
					<p className='ms-3 text-[#7B7B7B] text-sm'>by <span className='font-semibold'>John Doe</span></p>
					<p className='text-sm text-[#3E3E3E] mx-3 py-4'>Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...</p>
				</div>
				<div className='font-semibold flex justify-between text-white bg-[#2430A0] px-4 py-2 rounded-b-lg'>
					<div>₹1,499 <span className="ms-1 font-light text-sm text-[#BEC4FF] top-0 left-0 w-full h-full line-through"> ₹1,499</span> </div>
					<div><button>Enroll now</button></div>
				</div>
			</div>
			<div className='rounded-lg block md:min-w-72 min-w-72 md:w-60  mx-3 mb-5'>
				<div className='flex justify-between mx-4 absolute'>
					<div>
						<h2 className='bg-white text-[#2430A0] -ms-2 my-4 px-3 rounded-sm text-sm py-1 font-bold'>60% OFF</h2>
					</div>
					<div>
						<button className='bg-white ms-36 my-4 text-black px-1 rounded-sm py-1'>
							<BookmarkBorderIcon />
						</button>
					</div>
				</div>
				<img src={cardImg} alt='cardimage' className='min-w-72 md:w-60' />
				<div className='bg-[#E9EFFF]'>
					<h2 className='text-[#2430A0] font-semibold uppercase mx-3 py-3'>Language</h2>
					<h4 className='text-black font-semibold mx-3 py-1'>Class name - Lorem ipsum sit elit varsit lectusi sit amet</h4>
					<p className='ms-3 text-[#7B7B7B] text-sm'>by <span className='font-semibold'>John Doe</span></p>
					<p className='text-sm text-[#3E3E3E] mx-3 py-4'>Lorem ipsum dolor sit amet, varius consectetur varius entat consectet adipiscing elit. Ullamcorper...</p>
				</div>
				<div className='font-semibold flex justify-between text-white bg-[#2430A0] px-4 py-2 rounded-b-lg'>
					<div>₹1,499 <span className="ms-1 font-light text-sm text-[#BEC4FF] top-0 left-0 w-full h-full line-through"> ₹1,499</span> </div>
					<div><button>Enroll now</button></div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
