import React from 'react'
import crad1img from "../assets/Images/card1.png"
import crad2img from "../assets/Images/card2.png"
import crad3img from "../assets/Images/card3.png"
import crad4img from "../assets/Images/card4.png"
import sideBlob from "../assets/Images/sideBlob.png"
const Explore = () => {
	return (
		<div>
			<div>
				<img src={sideBlob} alt="blob" className='w-fit h-fit absolute -ml-96 -mt-40' />
			</div>
			<div className='flex justify-center'>
				<svg width="120" height="116" viewBox="0 0 120 116" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M70.4663 101.71C73.2934 99.7514 75.3821 97.4224 76.8259 94.8597C78.274 92.2947 79.0762 89.4927 79.3357 86.5871C79.5998 83.6792 79.3179 80.6712 78.596 77.692C77.8729 74.7117 76.7108 71.757 75.2065 68.9658C74.3161 67.3118 73.3106 65.722 72.1974 64.2083C71.0746 62.6806 69.8277 61.2479 68.4693 59.925C67.1108 58.6105 65.6384 57.4222 64.0525 56.4159C62.4688 55.4095 60.7739 54.5807 58.9747 53.9806C57.8706 53.613 56.447 53.3075 54.9288 53.1605C53.4127 53.0157 51.7987 53.0305 50.3225 53.3103C48.8464 53.5902 47.5026 54.1317 46.5249 55.0357C45.5472 55.9398 44.9312 57.2064 44.9082 58.941C44.8893 60.1943 45.3118 61.4166 46.1019 62.3939C46.8581 63.362 47.9196 64.1477 49.1114 64.7815C50.3022 65.4164 51.6279 65.895 52.9135 66.2432C54.0854 66.5586 55.2803 66.7792 56.4867 66.9028C58.1863 67.067 59.8968 67.0724 61.5958 66.919C63.3174 66.7632 65.0203 66.4504 66.6834 65.9844C68.3488 65.5157 69.9673 64.8922 71.4955 64.1151C73.017 63.348 74.4487 62.4154 75.7647 61.3341C77.1954 60.1612 78.451 58.7898 79.4938 57.2613C80.4798 55.8118 81.239 54.2197 81.7455 52.5397C84.8969 42.0673 77.5835 32.1283 70.8581 24.841C67.5285 21.2357 64.1071 17.7165 60.6669 14.2185C57.1312 10.6171 53.4328 7.18207 49.5807 3.92245" stroke="#FFDD00" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" />
					<path d="M82.8201 104.153C76.0689 102.613 70.6298 106.694 64.0168 106.514C66.1918 101.969 70.187 92.5511 69.436 87.2857" stroke="#FFDD00" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</div>
			<div className='mx-auto flex justify-center'>
				<h2 className='my-4 w-full md:w-[40%] text-center text-2xl md:text-3xl font-bold text-[#2430A0]'>
					Explore. Enroll. Have Fun. Repeat - where hobby meets happiness
				</h2>
			</div>

			<div className='flex flex-wrap md:flex-nowrap justify-around mx-3 my-5 items-center'>
				<div className='w-full md:w-70 items-center text-center mb-5 md:mb-0'>
					<span className='py-4 flex justify-center'>
						<img src={crad1img} alt="card1" className='w-20 h-24 py-3' />
					</span>
					<div className="text-center">
						<h2 className="mb-3 font-semibold text-[#2430A0] text-xl">Learn something new</h2>
						<p className='text-[#51557D] text-sm  md:w-52  mx-auto'>Explore your passion and go beyond the physical and mental boundaries of time, age, gender, or geography.</p>
					</div>
				</div>
				<div className='w-full md:w-70 items-center text-center mb-5 md:mb-0'>
					<span className='py-4 flex justify-center'>
						<img src={crad2img} alt="card2" className='w-20 h-24 py-3' />
					</span>
					<div className="text-center">
						<h2 className="mb-3 font-semibold text-[#2430A0] text-xl">Skilled & Passionate Teachers</h2>
						<p className='text-[#51557D] text-sm  md:w-52  mx-auto'>We offer interactive classes by experts who are qualified and trusted.</p>
					</div>
				</div>
				<div className='w-full md:w-70 items-center text-center mb-5 md:mb-0'>
					<span className='py-4 flex justify-center'>
						<img src={crad3img} alt="card3" className='w-20 h-24 py-3' />
					</span>
					<div className="text-center">
						<h2 className="mb-3 font-semibold text-[#2430A0] text-xl">Take classes anytime, anywhere</h2>
						<p className='text-[#51557D] text-sm  md:w-52  mx-auto'>Join sessions at your own convenience and pace, from the comforts of your home.</p>
					</div>
				</div>
				<div className='w-full md:w-70 items-center text-center'>
					<span className='py-4 flex justify-center'>
						<img src={crad4img} alt="card4" className='w-20 h-24 py-3' />
					</span>
					<div className="text-center">
						<h2 className="mb-3 font-semibold text-[#2430A0] text-xl">Pay as you go</h2>
						<p className='text-[#51557D] text-sm  md:w-52  mx-auto'>No enrollment fee for our classes. You only pay for the classes that you take. Your payment is safe and secure with us.</p>
					</div>
				</div>
			</div>


		</div>
	)
}

export default Explore