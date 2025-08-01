import { ExternalLink } from "lucide-react";
import Square from "../ui/Square";
import { useEffect, useState } from "react";
import Anchor from "../typography/Anchor";
import { useNavigate } from "react-router";

const Footer = () => {

	const [time, setTime] = useState<Date>(new Date(0,0,0));

	useEffect(() => {
		const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId);
	}, [])

	const navigate = useNavigate();

	return (
		<footer className="bg-[#282924] pt-16 px-16 pb-8 text-[#f8f3df]">
			<div className="flex mb-16">
				<div style={{ lineHeight: "2rem"}} className="text-6xl w-1/2 neuebit">Get in Touch</div>
				<div className="flex w-1/4 flex-col gap-2 neue-montreal-mono font-[400] text-sm">
					<Anchor onClick={() => navigate("/")}>HOME</Anchor>
					<Anchor onClick={() => navigate("/about")}>ABOUT</Anchor>
					<Anchor onClick={() => navigate("/contact")}>CONTACT</Anchor>
				</div>
				<div className="flex w-1/4 flex-col gap-2 neue-montreal-mono font-[400] text-sm">
					<Anchor onClick={()=> window.open("/documents/resume.pdf")}>
						RESUME
					</Anchor>
					<Anchor onClick={()=> window.open("mailto:felixcao37@gmail.com")}>
						EMAIL 
					</Anchor>
					<Anchor onClick={()=> window.open("https://www.linkedin.com/in/felix-cao/", "_blank")}>
						<div className="flex">
							<div className="mr-1">LINKEDIN</div> 
							<div className="mt-1">
								<ExternalLink size={12}/>
							</div>
						</div>
					</Anchor>
					<Anchor onClick={()=> window.open("https://github.com/felixc90", "_blank")}>
						<div className="flex">
							<div className="mr-1">GITHUB</div> 
							<div className="mt-1">
								<ExternalLink size={12}/>
							</div>
						</div>
					</Anchor>
				</div>
			</div>
			<div className="flex justify-between w-full neue-montreal-mono text-sm font-[400] mb-4">
				<div>©2025 FELIX CAO</div>
				<div>{time.toLocaleTimeString().substring(0,5)} SYD</div>
				<div>DEVELOPING APPS</div>
			</div>
			<div className="flex justify-between w-full neue-montreal-mono text-xs font-[450]">
					<Square color="#f8f3df" />
				<div>Y2K DESIGN</div>
				<div className="flex gap-4">
					<Square color="#f8f3df" />
					<Square color="#f8f3df" />
					<Square color="#f8f3df" />
				</div>
				<div>WITH REACT</div>
				<Square color="#f8f3df" />
			</div>
			
		</footer>
	)
}

export default Footer;