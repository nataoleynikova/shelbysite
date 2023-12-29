import React from "react";
import { motion } from "framer-motion";
import Footer from '@/pages/footer';
import HText from "@/shared/HText";
import OurWorkImg from "@/assets/OurWork.png";

const AboutUs: React.FC = () => {
	return <section>

		<div className="flex flex-col justify-center">
			{/* our work */}
			<div>
				<div className="pb-20 text-center">
					<HText>Our Work</HText>
				</div>
				<div className="flex flex-row w-5/6 ml-28">
					<img 
						className="rounded-md brightness-75"
						src={OurWorkImg} 
						alt="OurWorkImg" 
					/>
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
						<p className="inline-block text-justify text-xl ml-16 mt-10">
							Our high standard of building has helped us be a part of exceptional projects across the five boroughs. We utilize the latest industry technologies to provide electrical construction of new facilities and spaces in need of remodeling.
						</p>
						<p className="inline-block text-justify text-xl ml-16 mt-16">
							We deliver full-service solutions backed by the expertise of our office personnel and experienced electricians on all five boroughs.  You'll find us in major healthcare facilities, complex data centers, out in the solar field, and on job sites of every scope and size.
						</p>
					</motion.div>
				</div>
			</div>
		
			{/* our philosophy */}
			<div className="our_philosophy w-5/6 ml-28 pb-20 mt-40 rounded-md">
				<div className="pb-16 pt-20 text-center text-white">
					<HText>Our Philosophy</HText>
				</div>
				<div className="px-16">
					<p className="text-justify text-xl text-white">
						Our high standard of building has helped us be a part of exceptional projects across the five boroughs. We utilize the latest industry technologies to provide electrical construction of new facilities and spaces in need of remodeling.
					</p>
				</div>
			</div>
		</div>
		
		<div>
			<Footer />
		</div>
	</section>
}

export default AboutUs;