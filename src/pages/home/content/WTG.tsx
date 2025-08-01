import Button from "@/components/ui/Button";

const WTG = () => {

	return (
		<div>
			<Button disabled variant="filled">INTERNSHIP</Button>
			<div className="mt-4 mb-8">
				<div className="text-lg">Productivity Acceleration & Visualization Engine (PAVE)</div>
				<div className="neue-montreal-mono text-[13px] tracking-tighter">1st Rotation | Worked with Vue.js, C#, .NET</div>
				<ul className="ml-4 list-inside list-[square]">
					<li className="my-2">Text</li>
					<li className="my-2">Text</li>
				</ul>
			</div>
			<div className="my-8">
				<div className="text-lg">Allocations Management</div>
				<div className="neue-montreal-mono text-[13px] tracking-tighter">2nd Rotation | Worked with Vue.js, C#, .NET</div>
				<ul className="ml-4 list-inside list-[square]">
					<li className="my-2">Text</li>
					<li className="my-2">Text</li>
					<li className="my-2">Text</li>
				</ul>
			</div>
			<br />
			<Button disabled variant="filled">CASUAL EMPLOYMENT</Button>
			<div className="mt-4 mb-8">
				<div className="text-lg ">Business Intelligence</div>
				<div className="neue-montreal-mono text-[13px] tracking-tighter">3rd Rotation | Worked with C#, .NET, Microsoft SQL Server</div>
				<ul className="ml-4 my-4 list-inside list-[square]">
					<li className="my-2">Text </li>
					<li className="my-2">Text</li>
					<li className="my-2">Text</li>
				</ul>
			</div>
		</div>
	)
}

export default WTG;