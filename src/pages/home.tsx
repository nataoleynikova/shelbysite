import React from 'react';
import HText from "@/shared/HText";
import Footer from '@/pages/footer';
import Commercial from "@/assets/Commercial.png";
import Residential from "@/assets/Residential.png";
import Industrial from "@/assets/Industrial.png";
import ServiceCalls from "@/assets/ServiceCalls.png";
import FireAlarmARCS from "@/assets/FireAlarmARCS.png";
import LowVoltage from "@/assets/LowVoltage.png";

const Home: React.FC = () => {
	return <section>
		<div className='flex flex-col justify-center'>
			<div className='pb-20 text-center'>
				<HText>
					Comprehensive Electrical Contracting Services for Your Every Need
				</HText>
			</div>
			<div className='grid grid-rows-2 grid-flow-col ml-28 text-lg'>
				<div>
					<div className='w-[370px] mr-16 mb-16'>
						<img 
							className='w-[370px] h-[280px] rounded-md brightness-75'
							src={Commercial} 
							alt="Commercial" 
						/>
						<h4 className='text-center py-5'>Commercial</h4>
						<p className='text-justify'>Expert commercial electrical services tailored to your needs. From installations to repairs and upgrades, our skilled team delivers top-quality workmanship.</p>
					</div>
				</div>
				
				<div>
					<div className='w-[370px] mr-16 mb-16'>
						<img
							className='w-[370px] h-[280px] rounded-md brightness-75'
							src={Residential} 
							alt="Residential" 
						/>
						<h4 className='text-center py-5'>Residential</h4>
						<p className='text-justify'>Looking for Premium residential electrical services for your home. From installations to repairs, our skilled team provides safe and reliable solutions.</p>
					</div>
				</div>
				
				<div>
					<div className='w-[370px] mr-16 mb-16'>
						<img 
							className='w-[370px] h-[280px] rounded-md brightness-75'
							src={Industrial} 
							alt="Industrial" 
						/>
						<h4 className='text-center py-5'>Industrial</h4>
						<p className='text-justify'>Our experienced team handles installations, maintenance, and repairs with precision and efficiency. Trust us for safe, reliable, and high-quality electrical services.</p>
					</div>
				</div>
				
				<div>
					<div className='w-[370px] mr-16 mb-16'>
						<img 
							className='w-[370px] h-[280px] rounded-md brightness-75'
							src={ServiceCalls} 
							alt="Service Calls" 
						/>
						<h4 className='text-center py-5'>Service Calls</h4>
						<p className='text-justify'>Round-the-clock emergency electrical services at your fingertips. Our team is available 24/7 for all your urgent electrical needs. From power outages to electrical failures, we respond promptly and deliver efficient solutions.</p>
					</div>
				</div>
				
				<div>
					<div className='w-[370px] mr-16 mb-16'>
						<img 
							className='w-[370px] h-[280px] rounded-md brightness-75'
							src={FireAlarmARCS} 
							alt="Fire Alarm & ARCS"
						/>
						<h4 className='text-center py-5'>Fire Alarm & ARCS</h4>
						<p className='text-justify'>Comprehensive fire alarm and ARCS installation services you can rely on. Our expert team specializes in designing and installing cutting-edge fire alarm systems and ARCS systems. Ensure the safety of your property with our reliable solutions.</p>
					</div>
				</div>
				
				<div>
					<div className='w-[370px] mr-16 mb-16'>
						<img 
							className='w-[370px] h-[280px] rounded-md brightness-75'
							src={LowVoltage} 
							alt="Low Voltage" 
						/>
						<h4 className='text-center py-5'>Low Voltage</h4>
						<p className='text-justify'>Our skilled team specializes in low voltage installations, including data and communication wiring, security systems, and energy-efficient lighting. Count on us for efficient, reliable, and customized low voltage services.</p>
					</div>
				</div>
			</div>
		</div>

		<div>
			<Footer />
		</div>
	</section>
}

export default Home;