import React from "react";
import Footer from '@/pages/footer';
import HText from "@/shared/HText";
import image1 from "@/assets/BoerumStreet.png";
import image2 from "@/assets/Bay25thStreet.png";
import image3 from "@/assets/ManhattanAvenue.png";
import image4 from "@/assets/NarrowsRoadBrooklyn.png";
import image5 from "@/assets/99thStreetBrooklyn.png";
import image6 from "@/assets/West13thStreetManhattan.png";
import image7 from "@/assets/SaintEdwardsStreet.png";

const Projects: React.FC = () => {

	return <section>
		<div className='flex flex-col justify-center'>
			<div className='pb-20 text-center'>
				<HText>
					Expertly Executed Projects, One Name you can trust
				</HText>
			</div>

			<div className='flex flex-wrap justify-center ml-28 text-lg cursor-pointer'>
				<div>
					<div className='w-[450px] mr-16 mb-16 relative flex'>
						<img 
							className='w-[450px] h-[380px] rounded-md brightness-50'
							src={image1} 
							alt="Boerum Street" 
						/>
						<div className="absolute top-[280px] pl-10 text-white">
							<h4 className='text-center py-5'>Boerum Street</h4>
						</div>
						<div className="absolute w-full h-full top-0 px-5 pt-10 opacity-0 transition duration-500 hover:opacity-90 text-white ">
							<p className='text-justify'>19-story residential building in Williamsburg. The 190-foot tall structure yields 100,650 square feet for residential use, with 162 dwelling units, averaging 838 square foot per unit. Below ground space comes with capacity for 85 vehicles and storage space. The first floor has two recreational spaces, a lobby and a package room.</p>
						</div>
					</div>
				</div>

				<div>
					<div className='w-[450px] mr-16 mb-16 relative flex'>
						<img 
							className='w-[450px] h-[380px] rounded-md brightness-50'
							src={image2} 
							alt="Bay 25th Street" 
						/>
						<div className="absolute top-[280px] pl-10 text-white">
							<h4 className='text-center py-5'>Bay 25th Street</h4>
						</div>
						<div className="absolute w-full h-full top-0 px-5 pt-10 opacity-0 transition duration-500 hover:opacity-90 text-white ">
							<p className='text-justify'>2 Story, basement and cellar 3 family semi-detached residence.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className='w-[450px] mr-16 mb-16 relative flex'>
						<img 
							className='w-[450px] h-[380px] rounded-md brightness-50'
							src={image3} 
							alt="Manhattan avenue" 
						/>
						<div className="absolute top-[280px] pl-10 text-white">
							<h4 className='text-center py-5'>Manhattan avenue</h4>
						</div>
						<div className="absolute w-full h-full top-0 px-5 pt-10 opacity-0 transition duration-500 hover:opacity-90 text-white ">
							<p className='text-justify'>Located in Greenpoint, Brooklyn, between Freeman Street and Green Street, the 75-foot-tall development yields 28,436 square feet, with 24,666 square feet designated for residential space and 3,770 square feet for commercial space. The building has 30 residences with nine affordable housing units. Units are rentals based on the average unit scope of 822 square feet. The concrete-based structure has a cellar and a 22-foot-long rear yard.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className='w-[450px] mr-16 mb-16 relative flex'>
						<img 
							className='w-[450px] h-[380px] rounded-md brightness-50'
							src={image4} 
							alt="Narrows Road Brooklyn" 
						/>
						<div className="absolute top-[280px] pl-10 text-white">
							<h4 className='text-center py-5'>Narrows Road Brooklyn</h4>
						</div>
						<div className="absolute w-full h-full top-0 px-5 pt-10 opacity-0 transition duration-500 hover:opacity-90 text-white ">
							<p className='text-justify'>Renovation of existing detached one family residence.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className='w-[450px] mr-16 mb-16 relative flex'>
						<img 
							className='w-[450px] h-[380px] rounded-md brightness-50'
							src={image5} 
							alt="99th Street Brooklyn" 
						/>
						<div className="absolute top-[280px] pl-10 text-white">
							<h4 className='text-center py-5'>99th Street Brooklyn</h4>
						</div>
						<div className="absolute w-full h-full top-0 px-5 pt-10 opacity-0 transition duration-500 hover:opacity-90 text-white ">
							<p className='text-justify'>New 4-story & Cellar, 2-family residential building located in Brooklyn.</p>
						</div>
					</div>
				</div>
				
				<div>
					<div className='w-[450px] mr-16 mb-16 relative flex'>
						<img 
							className='w-[450px] h-[380px] rounded-md brightness-50'
							src={image6} 
							alt="West 13th Street Manhattan" 
						/>
						<div className="absolute top-[280px] pl-10 text-white">
							<h4 className='text-center py-5'>West 13th Street Manhattan</h4>
						</div>
						<div className="absolute w-full h-full top-0 px-5 pt-10 opacity-0 transition duration-500 hover:opacity-90 text-white ">
							<p className='text-justify'>Seven Story High Rise residential structure. The seventy foot structure yields close to 75,200 square feet dedicated to residential use.</p>
						</div>
					</div>
				</div>

				<div>
					<div className='w-[450px] mr-16 mb-16 relative flex'>
						<img 
							className='w-[450px] h-[380px] rounded-md brightness-50'
							src={image7} 
							alt="Saint Edwards Street" 
						/>
						<div className="absolute top-[280px] pl-10 text-white">
							<h4 className='text-center py-5'>Saint Edwards Street</h4>
						</div>
						<div className="absolute w-full h-full top-0 px-5 pt-10 opacity-0 transition duration-500 hover:opacity-90 text-white ">
							<p className='text-justify'>19-story residential building in Williamsburg. The 190-foot tall structure yields 100,650 square feet for residential use, with 162 dwelling units, averaging 838 square foot per unit. Below ground space comes with capacity for 85 vehicles and storage space. The first floor has two recreational spaces, a lobby and a package room.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div>
			<Footer />
		</div>
	</section>
}

export default Projects;