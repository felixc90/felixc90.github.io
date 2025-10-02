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
		<footer className="bg-darker pt-16 px-8 sm:px-16 pb-8 text-[var(--light)] border-t-1 border-t-light neue-montreal-mono font-[400] text-[10px] sm:text-sm">
			<div className="flex mb-16">
				<div style={{ lineHeight: "3rem"}} className="text-4xl sm:text-6xl w-1/2 neuebit mr-8">Get in Touch</div>
				<div className="flex w-1/4 flex-col gap-2 ">
					<Anchor onClick={() => navigate("/")}>HOME</Anchor>
					<Anchor onClick={() => navigate("/about")}>ABOUT</Anchor>
					<Anchor onClick={() => navigate("/contact")}>CONTACT</Anchor>
				</div>
				<div className="flex w-1/4 flex-col gap-2 mr-4">
					<Anchor onClick={()=> window.open("/documents/resume.pdf")}>
						RESUME
					</Anchor>
					<Anchor onClick={()=> window.open("mailto:felixcao37@gmail.com")}>
						EMAIL 
					</Anchor>
					<Anchor onClick={()=> window.open("https://www.linkedin.com/in/felix-cao/", "_blank")}>
						<div className="flex">
							<div className="mr-1">LINKEDIN</div> 
							<div>
								<ExternalLink size={12}/>
							</div>
						</div>
					</Anchor>
					<Anchor onClick={()=> window.open("https://github.com/felixc90", "_blank")}>
						<div className="flex">
							<div className="mr-1">GITHUB</div> 
							<div>
								<ExternalLink size={12}/>
							</div>
						</div>
					</Anchor>
				</div>
			</div>
			<div className="flex justify-between w-full mb-4">
				<div>©2025 FELIX CAO</div>
				<div className="hidden sm:block">
					{time.toLocaleTimeString().substring(0,2)}
					<span className="animate-blink">:</span>
					{time.toLocaleTimeString().substring(3,5)} SYD
				</div>
				<div>DEVELOPING APPS</div>
			</div>
			<div className="flex justify-between w-full neue-montreal-mono text-[10px] sm:text-xs font-[450]">
					<Square color="var(--light)" />
				<div>BRUTALISM</div>
				<div className="flex gap-4">
					<Square color="var(--light)" className="hidden sm:block" />
					<Square color="var(--light)" />
					<Square color="var(--light)" className="hidden sm:block" />
				</div>
				<div>WITH REACT</div>
				<Square color="var(--light)" />
			</div>
			
		</footer>
	)
}

export default Footer;