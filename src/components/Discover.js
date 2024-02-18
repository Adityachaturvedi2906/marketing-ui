import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Cards from './Cards';


const Discover = () => {
	const roundedGroupStyle = {
		borderRadius: '20px',
		overflow: 'hidden',
		margin: '0 -4px',
	};

	const button1Color = {
		backgroundColor: '#2430A0',
		fontWeight: '600',
	}

	const button2Color = {
		backgroundColor: '#F4F7FA',
		color: '#1C1C1C',
		fontWeight: '600',
	}
	return (
		<div>
			<div className='flex flex-col md:flex-row justify-between ms-4 md:ms-36 me-4 md:me-24 mt-8 md:my-10'>
				<div className='mb-4 md:mb-0'>
					<div className='flex justify-between items-baseline'>
						<div>
							<h2 className='font-bold text-xl md:text-4xl text-[#2430A0]'>Discover Classes</h2>
						</div>
						<div>
							<a href="/" className='uppercase underline text-sm font-semibold text-[#E25753] ms-2 md:ms-4'>Show All</a>
						</div>
					</div>
					<p className='text-sm text-[#51557D] py-2 md:py-4'>Choose from a variety of classes from around the world.</p>
				</div>
				<div className='flex items-center justify-between'>
					<div className='mx-2 md:mx-8'>
						<h3 className='text-sm text-[#51557D]'>Show prices in: </h3>
					</div>
					<div>
						<ButtonGroup
							disableElevation
							variant="contained"
							style={roundedGroupStyle}
							aria-label="Disabled button group"
						>
							<Button style={button1Color}>NOK</Button>
							<Button style={button2Color}>INR</Button>
						</ButtonGroup>
					</div>
				</div>
			</div>

			<div >
				<Cards />
			</div>
		</div>
	)
}

export default Discover