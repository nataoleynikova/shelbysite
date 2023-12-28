import React from 'react';
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Footer from '@/pages/footer';
import Commercial from "@/assets/Commercial.png";
import Residential from "@/assets/Residential.png";
import Industrial from "@/assets/Industrial.png";
import ServiceCalls from "@/assets/ServiceCalls.png";
import FireAlarmARCS from "@/assets/FireAlarmARCS.png";
import LowVoltage from "@/assets/LowVoltage.png";

const container = {
	hidden: {},
	visible: {
		transition: {staggerChildren: 0.8}
	},
};

const Home: React.FC = () => {
	return <section>
		<div className='flex flex-col justify-center'>
			<div className='pb-20 text-center'>
				<HText>
					Comprehensive Electrical Contracting Services for Your Every Need
				</HText>
			</div>
			<div className='grid grid-rows-2 grid-flow-col ml-28'>
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<div className='w-[305px] mr-16 mb-16'>
						<img 
							className='w-[305px] h-[230px] rounded-md'
							src={Commercial} 
							alt="Commercial" />
						<h4 className='text-center py-5'>Commercial</h4>
						<p className='text-justify'>Expert commercial electrical services tailored to your needs. From installations to repairs and upgrades, our skilled team delivers top-quality workmanship.</p>
					</div>
				</motion.div>
				
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<div className='w-[305px] mr-16 mb-16'>
						<img 
							className='w-[305px] h-[230px] rounded-md'
							src={Residential} 
							alt="Residential" />
						<h4 className='text-center py-5'>Residential</h4>
						<p className='text-justify'>Looking for Premium residential electrical services for your home. From installations to repairs, our skilled team provides safe and reliable solutions.</p>
					</div>
				</motion.div>
				
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<div className='w-[305px] mr-16 mb-16'>
						<img 
							className='w-[305px] h-[230px] rounded-md'
							src={Industrial} 
							alt="Industrial" />
						<h4 className='text-center py-5'>Industrial</h4>
						<p className='text-justify'>Our experienced team handles installations, maintenance, and repairs with precision and efficiency. Trust us for safe, reliable, and high-quality electrical services.</p>
					</div>
				</motion.div>
				
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<div className='w-[305px] mr-16 mb-16'>
						<img 
							className='w-[305px] h-[230px] rounded-md'
							src={ServiceCalls} 
							alt="Service Calls" />
						<h4 className='text-center py-5'>Service Calls</h4>
						<p className='text-justify'>Round-the-clock emergency electrical services at your fingertips. Our team is available 24/7 for all your urgent electrical needs. From power outages to electrical failures, we respond promptly and deliver efficient solutions.</p>
					</div>
				</motion.div>
				
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<div className='w-[305px] mr-16 mb-16'>
						<img 
							className='w-[305px] h-[230px] rounded-md'
							src={FireAlarmARCS} 
							alt="Fire Alarm & ARCS"/>
						<h4 className='text-center py-5'>Fire Alarm & ARCS</h4>
						<p className='text-justify'>Comprehensive fire alarm and ARCS installation services you can rely on. Our expert team specializes in designing and installing cutting-edge fire alarm systems and ARCS systems. Ensure the safety of your property with our reliable solutions.</p>
					</div>
				</motion.div>
				
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<div className='w-[305px] mr-16 mb-16'>
						<img 
							className='w-[305px] h-[230px] rounded-md'
							src={LowVoltage} 
							alt="Low Voltage" />
						<h4 className='text-center py-5'>Low Voltage</h4>
						<p className='text-justify'>Our skilled team specializes in low voltage installations, including data and communication wiring, security systems, and energy-efficient lighting. Count on us for efficient, reliable, and customized low voltage services.</p>
					</div>
				</motion.div>
			</div>
		</div>

		<div>
			<Footer />
		</div>
	</section>
}

export default Home;