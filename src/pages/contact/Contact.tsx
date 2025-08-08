import Button from "@/components/ui/Button";
import MySplitText from "@/components/ui/MySplitText";
import ScrambleText from "@/components/ui/ScrambleText";
import Square from "@/components/ui/Square";
import { ArrowDownRight } from "lucide-react";

const Contact = () => {
	
	return (
		<div className="bg-light min-h-screen sm:min-h-[calc(100vh+6rem)] px-16 py-8 text-dark">
			<div className="flex-col flex justify-around mt-14">
				<div className="flex justify-between w-full neue-montreal-mono text-xs font-[450]">
					<div className="flex gap-4">
						<Square />
						<Square />
						<Square />
					</div>
					<ScrambleText duration={1.5} chars="upperCase">POSTMAN</ScrambleText>
					<Square />
					<Square />
					<Square />
					<ScrambleText duration={1.5} chars="upperCase">TCP/UDP</ScrambleText>
					<div className="flex gap-4">
						<Square />
						<Square />
						<Square />
					</div>
				</div>
				<div className="flex-col flex sm:justify-around w-full mt-12 flex-wrap">
					<div className="flex md:flex-none justify-between">
						<div className="flex font-[800] mondwest text-5xl sm:text-7xl md:text-[5.4rem] lg:text-[7rem] w-full flex-col md:flex-row mb-10">
							<div className="w-1/2 pr-4 sm:pr-8 md:pr-12 lg:pr-16 flex md:flex-row-reverse">Have</div>
							<div className="w-1/2 lg:text-[7rem] flex-row">Questions?</div>
						</div>
					</div>
					<div className="flex w-full flex-col md:flex-row">
						<div className="w-0 md:w-1/2 flex md:flex-col flex-col-reverse">
							<div className="flex flex-row-reverse mx-12" >
								<div className="flex-col opacity-95 hidden md:flex">
									<ArrowDownRight color="var(--dark)" size={"12rem"} viewBox="-2 8 20 16"/>
								</div>
							</div>
						</div>
						<div className=" w-full md:w-1/2">
							<MySplitText className="md:text-1xl lg:text-2xl w-4/5 mb-12">
								Got a question to ask, or just want to say hi? I'm always open to new opportunities and collaborations — feel free to reach out.
							</MySplitText>
							<div>
								<div className="flex gap-1">
									<Button variant="filled" readonly>EMAIL</Button>
									<Button variant="filled" readonly></Button>
								</div>
								<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 font-[450] underline hover:cursor-pointer" onClick={()=> window.open("mailto:felixcao37@gmail.com")}>
									felixcao37@gmail.com
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<hr className="border-1 border-dashed border-dark/70 my-16"/>
		</div>
	)
}



export default Contact;