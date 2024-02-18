import React, { useState, useEffect } from 'react';
import teacher1 from "../assets/Images/teacher1.png";
import teacher2 from "../assets/Images/teacher2.png";
import teacher3 from "../assets/Images/teacher3.png";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const Teachers = () => {
	const teacherData = [
		{ name: 'Karandeep', subject: 'Yoga', image: teacher1 },
		{ name: 'Asier', subject: 'Arts & Craft', image: teacher2 },
		{ name: 'Marius Neilson', subject: 'Academics', image: teacher3 },
		{ name: 'Nichola', subject: 'Language', image: teacher1 },

		{ name: 'Asier', subject: 'Arts & Craft', image: teacher2 },
		{ name: 'Karandeep', subject: 'Yoga', image: teacher1 },
		{ name: 'Marius Neilson', subject: 'Academics', image: teacher3 },
		{ name: 'Nichola', subject: 'Language', image: teacher1 },
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleCards, setVisibleCards] = useState(4);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % teacherData.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + teacherData.length) % teacherData.length);
	};

	useEffect(() => {
		const handleResize = () => {
			const newVisibleCards = window.innerWidth < 768 ? 1 : 4;
			setVisibleCards(newVisibleCards);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const cardWidth = 320;

	const isLastCard = currentIndex === teacherData.length - visibleCards;

	return (
		<div className='ms-36'>
			<h2 className='font-bold text-4xl text-[#2430A0]'>Meet our teachers</h2>
			<div className='flex items-center justify-between my-10 overflow-x-hidden relative'>
				<div className='z-10'>
					<button
						className={`absolute left-0 top-1/2 transform -translate-y-1/2 border-2 border-[#2430A0] text-[#2430A0] mx-2 rounded-md px-2 py-1 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
						onClick={handlePrev}
						disabled={currentIndex === 0}
					>
						<ArrowBackIosRoundedIcon />
					</button>
					<button
						className={`absolute left-12 top-1/2 transform -translate-y-1/2 border-2 border-[#2430A0] text-[#2430A0] mx-2 rounded-md px-2 py-1 ${isLastCard ? 'opacity-50 cursor-not-allowed' : ''}`}
						onClick={handleNext}
						disabled={isLastCard}
					>
						<ArrowForwardIosRoundedIcon />
					</button>
				</div>
				<div className='flex transition-transform ease-in-out ms-10 duration-300' style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}>
					{teacherData.map((teacher, index) => (
						<div
							key={index}
							className={`text-center w-64 px-5 mx-3`}
							style={{
								marginLeft: index !== 0 ? '1rem' : '0',
								marginRight: index !== teacherData.length - 1 ? '1rem' : '0',
							}}
						>
							<img src={teacher.image} alt={`teacher ${index + 1}`} />
							<div className='bg-white shadow-lg py-3 rounded-b-lg'>
								<h2 className='text-xl font-semibold'>{teacher.name}</h2>
								<h4 className='font-semibold text-sm py-1 uppercase text-[#FF006D]'>{teacher.subject}</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Teachers;