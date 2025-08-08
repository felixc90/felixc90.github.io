import ScrambleText from "@/components/ui/ScrambleText";

const CSE = () => {
	return (
		<div>
			<div className="mb-8">
				<div className="text-lg">Tutor + Lab Assistant</div>
				<ScrambleText className="neue-montreal-mono text-[13px] tracking-tighter">Teaching COMP2521: Data Structures & Algorithms in C</ScrambleText>
				<ul className="ml-4 my-4 sm:text-sm md:text-[16px] list-outside list-[square] max-w-[44rem]">
					<li className="my-2">Tutored multiple classes of up to 24 students in the COMP2521 Data Structures & Algorithms course covering topics including recursion, trees, graphs, algorithmic analysis and sorting algorithms.</li>
					<li className="my-2">Designed lessons to engage students through detailed and visual tutorial plans and learning resources. This was combined with constant constructive feedback to students based on code style, algorithm efficiency and quality of understanding.</li>
				</ul>
			</div>
		</div>
	)
}

export default CSE;