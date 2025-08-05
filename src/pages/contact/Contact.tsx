import Button from "@/components/ui/Button";
import Square from "@/components/ui/Square";

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
					<div>POSTMAN</div>
					<Square />
					<Square />
					<Square />
					<div>TCP/UDP</div>
					<div className="flex gap-4">
						<Square />
						<Square />
						<Square />
					</div>
				</div>
				<div className="flex sm:justify-around w-full mt-12 flex-wrap sm:flex-nowrap">
					<div className="sm:w-1/2 flex sm:flex-row-reverse">
						<div className="font-[800] mondwest mr-4 sm:mr-8 md:mr-12 lg:mr-16 text-5xl sm:text-7xl md:text-8xl lg:text-9xl">Have</div>
					</div>
					<div className="sm:w-1/2">
						<div className="font-[800] mondwest text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-12 md:mb-12 lg:mb-16">Questions?</div>
						<div className="md:text-2xl w-4/5 mb-12">
							Got a question to ask, or just want to say hi? I'm always open to new opportunities and collaborations — feel free to reach out.
						</div>
						<div>
							<div className="flex gap-1">
								<Button variant="filled" readonly>EMAIL</Button>
								<Button variant="filled" readonly></Button>
							</div>
							<div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4 font-[450] underline hover:cursor-pointer" onClick={()=> window.open("mailto:felixcao37@gmail.com")}>
								felixcao37@gmail.com
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}



export default Contact;