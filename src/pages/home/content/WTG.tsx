import Button from "@/components/ui/Button";
import ScrambleText from "@/components/ui/ScrambleText";

const WTG = () => {

	return (
		<div>
			<Button disabled variant="filled">INTERNSHIP</Button>
			<div className="mt-4 mb-8">
				<div className="text-lg">Productivity Acceleration & Visualization Engine (PAVE)</div>
				<ScrambleText className="neue-montreal-mono text-[13px] tracking-tighter">1st Rotation | Worked with Vue.js, C#, .NET</ScrambleText>
				<ul className="ml-4 sm:text-sm md:text-[16px] list-outside list-[square] max-w-[44rem]">
					<li className="my-2">Text</li>
					<li className="my-2">Text</li>
				</ul>
			</div>
			<div className="my-8">
				<div className="text-lg">Allocations Management</div>
				<ScrambleText className="neue-montreal-mono text-[13px] tracking-tighter">2nd Rotation | Worked with Vue.js, C#, .NET</ScrambleText>
				<ul className="ml-4 sm:text-sm md:text-[16px] list-outside list-[square] max-w-[44rem]">
					<li className="my-2">Text</li>
					<li className="my-2">Text</li>
					<li className="my-2">Text</li>
				</ul>
			</div>
			<Button disabled variant="filled">CASUAL EMPLOYMENT</Button>
			<div className="mt-4 mb-8">
				<div className="text-lg ">Business Intelligence</div>
				<ScrambleText className="neue-montreal-mono text-[13px] tracking-tighter">3rd Rotation | Worked with C#, .NET, Microsoft SQL Server</ScrambleText>
				<ul className="ml-4 sm:text-sm md:text-[16px] list-outside list-[square] max-w-[44rem]">
					<li className="my-2">Text </li>
					<li className="my-2">Text</li>
					<li className="my-2">Text</li>
				</ul>
			</div>
		</div>
	)
}

export default WTG;