import Title from "@/components/typography/Title";
import Button from "@/components/ui/Button";
import Square from "@/components/ui/Square";

const Contact = () => {

	return (
		<div className="bg-light h-[calc(100vh+6rem)] px-16 py-8 text-dark">
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
				<div className="flex justify-around w-full">
					<div className="w-1/2 flex flex-row-reverse">
						<div className="font-[800] mondwest mx-auto mt-16 text-9xl">Have</div>
					</div>
					<div className="w-1/2">
						<div className="font-[800] mondwest mt-16 mb-20 text-9xl">Questions?</div>
						<div className="text-2xl w-4/5 mb-12">
							Got a question to ask, or just want to say hi? I'm always open to new opportunities and collaborations — feel free to reach out.
						</div>
						<div>
							<div className="flex gap-1">
								<Button variant="filled" readonly>EMAIL</Button>
								<Button variant="filled" readonly></Button>
							</div>
							<div className="text-5xl mt-4 font-[450] underline hover:cursor-pointer" onClick={()=> window.open("mailto:felixcao37@gmail.com")}>
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