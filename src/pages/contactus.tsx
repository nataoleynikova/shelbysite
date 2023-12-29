import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Footer from '@/pages/footer';
import HText from "@/shared/HText";
import fb_icon from "@/assets/fb_icon.png";
import inst_icon from "@/assets/inst_icon.png";
import in_icon from "@/assets/in_icon.png"

const ContactUs: React.FC = () => {
	const inputStyles = `mb-5 w-full rounded-lg px-5 py-3`;
	
	const {
		register,
		trigger,
		formState: {errors}
	} = useForm();

	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	}

	return <section>
		<div>
			<div className="pb-20 text-center">
				<HText>Contact us to learn more</HText>
			</div>
			
			<div className="flex flex-row w-5/6 ml-28 justify-center">
				{/* contacts */}

				<motion.div
					className="mr-40 bg-[#222222] p-10 text-white rounded-md text-lg"
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: -50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<div>
						<div>
							<h4 className="font-bold">Address</h4>
							<p className="my-1">2461 East 16th St Brooklyn NY</p>
						</div>
						<div className="mt-5">
							<h4 className="font-bold">Phone</h4>
							<span className="my-1 hover:text-accent">
								<a href="tel:347633-4662">(347)633-4662</a>
							</span>
						</div>
						<div className="mt-5">
							<h4 className="font-bold">Email</h4>
							<span className="my-1 hover:text-accent">
								<a href="mailto:estimating@shelbyelectrical.com">estimating@shelbyelectrical.com</a>
							</span>
						</div>
					</div>

					<div className="mt-16 flex flex-row justify-between pt-14">
						<div className="brightness-75 hover:brightness-100">
						<a href="https://www.facebook.com/shelbyelectricalnyc" target="_blank">
								<img 
									className="w-[33px] h-[33px] rounded-md"
									src={fb_icon} 
									alt="Facebook icon" 
								/>
							</a>
						</div>
						<div className="brightness-75 hover:brightness-100">
							<a href="https://www.instagram.com/shelbyelectrical/" target="_blank">
								<img 
									className="w-[33px] h-[33px] rounded-md"
									src={inst_icon} 
									alt="Instagram icon" 
								/>
							</a>
						</div>
						<div className="brightness-75 hover:brightness-100">
							<a href="https://www.linkedin.com/company/shelby-electrical/" target="_blank">
								<img 
									className="w-[33px] h-[33px] rounded-md"
									src={in_icon} 
									alt="LinkedIn icon" 
								/>
							</a>
						</div>
					</div>
				</motion.div>
				
				{/* form */}
				<motion.div
					className="w-1/3 flex bg-[#222222] p-10 rounded-md"
					initial="hidden"
					whileInView="visible"
					viewport={{once: true, amount: 0.5}}
					transition={{duration: 0.75}}
					variants={{
						hidden: {opacity: 0, x: 50},
						visible: {opacity: 1, x: 0}
					}}
				>
					<form 
						target="_blank"
						onSubmit={onSubmit}
						action="https://formsubmit.co/your@email.com"
						method="POST"
					>
						{errors.name && (
							<p className="mb-1 text-white">
								{errors.name.type === "required" && "This field is required"}
								{errors.name.type === "maxLength" && "Max length is 100 char"}
							</p>
						)}
						<input 
							className={inputStyles}
							type="text"
							placeholder="* NAME"
							{...register("name", {
								required: true,
								maxLength: 100,
							})}
						/>
						
						{errors.email && (
							<p className="mb-1 text-white">
								{errors.email.type === "required" && "This field is required"}
								{errors.email.type === "pattern" && "invalid email address"}
							</p>
						)}
						<input 
							className={inputStyles}
							type="text"
							placeholder="* EMAIL"
							{...register("email", {
								required: true,
								pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							})}
						/>
						
						<input 
							className={inputStyles}
							type="text"
							placeholder="PHONE"
							{...register("phone", {
								required: true,
							})}
						/>

						<input 
							className={inputStyles}
							type="text"
							placeholder="ADDRESS"
							{...register("address", {
								required: true,
							})}
						/>
						
						{errors.message && (
							<p className="mb-1 text-white">
								{errors.message.type === "required" && "This field is required"}
								{errors.message.type === "maxLength" && "Max length is 2000 char"}
							</p>
						)}
						<textarea 
							className={inputStyles}
							rows={4}
							cols={50}
							placeholder="* MESSAGE"
							{...register("message", {
								required: true,
								maxLength: 2000,
							})}
						/>
						
						<button
							type="submit"
							className="rounded-lg py-3 px-10 mt-5 transition duration-500 text-white bg-primary-red"
						>
							SEND
						</button>
					</form>
				</motion.div>
			</div>

			<iframe 
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.7698341210603!2d-73.95620425913651!3d40.59083564514275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24461881c16c5%3A0xcd6bad471c0d0714!2zMjQ2MSBFYXN0IDE2dGggU3RyZWV0LCBCcm9va2x5biwgTlkgMTEyMzUsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1703429441136!5m2!1sru!2sru" 
				className="w-full h-[300px] border-0 mt-20"
			/>
		</div>

		<div>
			<Footer />
		</div>
	</section>
}

export default ContactUs;