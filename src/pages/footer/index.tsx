import HText from "@/shared/HText";
import fb_icon from "@/assets/fb_icon.png";
import inst_icon from "@/assets/inst_icon.png";
import in_icon from "@/assets/in_icon.png"

const Footer = () => {
	return (
		<footer className="py-16 mt-20 bg-[#232729]">
			<div className="justify-content mx-auto w-5/6 gap-16 text-white">
				<HText>Corporate info</HText>
				<div className="flex mt-10">	
					<div>
						{/* contacts */}
						<div>
							<h4 className="font-bold">Address</h4>
							<p className="my-1 text-[#cccccc]">2461 East 16th St Brooklyn NY</p>
						</div>
						<div className="mt-5">
							<h4 className="font-bold">Phone</h4>
							<span className="my-1 text-[#cccccc] hover:text-accent">
								<a href="tel:347633-4662">(347)633-4662</a>
							</span>
						</div>
						<div className="mt-5">
							<h4 className="font-bold">Email</h4>
							<span className="my-1 text-[#cccccc] hover:text-accent">
								<a href="mailto:estimating@shelbyelectrical.com">estimating@shelbyelectrical.com</a>
							</span>
						</div>

						{/* socials */}
						<div className="mt-16 flex flex-row justify-between">
							<div className="hover:blur-[1px]">
							<a href="https://www.facebook.com/shelbyelectricalnyc" target="_blank">
									<img 
										className="w-[33px] h-[33px] rounded-md"
										src={fb_icon} 
										alt="Facebook icon" 
									/>
								</a>
							</div>
							<div className="hover:blur-[1px]">
								<a href="https://www.instagram.com/shelbyelectrical/" target="_blank">
									<img 
										className="w-[33px] h-[33px] rounded-md"
										src={inst_icon} 
										alt="Instagram icon" 
									/>
								</a>
							</div>
							<div className="hover:blur-[1px]">
								<a href="https://www.linkedin.com/company/shelby-electrical/" target="_blank">
									<img 
										className="w-[33px] h-[33px] rounded-md"
										src={in_icon} 
										alt="LinkedIn icon" 
									/>
								</a>
							</div>
						</div>

						<p className="mt-16">@{new Date().getFullYear()} by Shelby Electrical.</p>
					</div>

					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.7698341210603!2d-73.95620425913651!3d40.59083564514275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24461881c16c5%3A0xcd6bad471c0d0714!2zMjQ2MSBFYXN0IDE2dGggU3RyZWV0LCBCcm9va2x5biwgTlkgMTEyMzUsINCh0KjQkA!5e0!3m2!1sru!2sru!4v1703429441136!5m2!1sru!2sru" 
						className="w-[900px] h-[300px] border-0 ml-40 rounded-md"
					/>
				</div>
			</div>
		</footer>
	)
};

export default Footer;