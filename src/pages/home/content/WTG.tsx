import Button from "@/components/ui/Button";

const WTG = () => {

	return (
		<div>
			<Button disabled variant="filled">INTERNSHIP</Button>
			<div className="mt-4 mb-8">
				<div className="text-lg">Productivity Acceleration & Visualization Engine (PAVE)</div>
				<div className="neue-montreal-mono text-[13px] tracking-tighter">1st Rotation | Worked with Vue.js, C#, .NET</div>
				<ul className="ml-4 sm:text-sm md:text-[16px] list-outside list-[square] max-w-[44rem]">
					<li className="my-2">Developed enterprise productivity software with the PAVE team using Vue and C#. 
						Contributed to features involving task tracking and work item customisation in both high-level design and end-to-end development.</li>
				</ul>
			</div>
			<div className="my-8">
				<div className="text-lg">Allocations Management</div>
				<div className="neue-montreal-mono text-[13px] tracking-tighter">2nd Rotation | Worked with Vue.js, C#, .NET</div>
				<ul className="ml-4 sm:text-sm md:text-[16px] list-outside list-[square] max-w-[44rem]">
					<li className="my-2">Enhanced freight forwarder workflows on the Allocations Management team by 
						working closely with the product team to provide intuitive support for allocating multiple routes to a single booking.</li>
					<li className="my-2">Adapted the Quoted Bookings table from the original C# GUI to WiseTech's web portal in JavaScript. 
						This included implementing 20+ unique columns, each calculated from specific Quoted Booking data.</li>
				</ul>
			</div>
			<Button disabled variant="filled">CASUAL EMPLOYMENT</Button>
			<div className="mt-4 mb-8">
				<div className="text-lg ">Business Intelligence</div>
				<div className="neue-montreal-mono text-[13px] tracking-tighter">3rd Rotation | Worked with C#, .NET, Microsoft SQL Server</div>
				<ul className="ml-4 sm:text-sm md:text-[16px] list-outside list-[square] max-w-[44rem]">
					<li className="my-2">Maintained data pipelines on the Business Intelligence team by resolving defects and delivering enhancements including implementing logic that
						enforces Change Data Capture for all customers.</li>
					<li className="my-2">
						Helped redesign report generation to source data from the higher-performance Enterprise Data Warehouse instead of the Main database.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default WTG;