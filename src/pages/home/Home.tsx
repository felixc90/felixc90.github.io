import { CSSProperties } from "react";
import Square from "@/components/ui/Square";
import SkillsSection from './SkillsSection';

const Home = () => {

	const Title = ({ children }: { children: React.ReactNode }) => {
		const style: CSSProperties = {
			fontFamily: "Mondwest",
			fontWeight: "800",
			fontSize: "10rem",
			marginTop: "4rem",
			lineHeight: "9rem",
			textShadow: "1px 1px 10px #fff"
		}

		return (
			<div style={style}>
				{ children }
			</div>
		)
	}

	return (
		<div>
			<div className="h-[calc(100vh-6rem)] w-full ">
				<div className="flex flex-col justify-between h-full">
					<div className="flex-col flex justify-around mt-18">
						<div className="flex justify-between w-full neue-montreal-mono text-xs font-[450]">
							<div className="flex gap-4">
								<Square />
								<Square />
								<Square />
							</div>
							<div>FROM SYDNEY</div>
							<Square />
							<Square />
							<Square />
							<div>PORTFOLIO'25</div>
							<div className="flex gap-4">
								<Square />
								<Square />
								<Square />
							</div>
						</div>
						<div className="flex justify-around w-full">
							<Title>Software Engineer</Title>
						</div>
					</div>
					<div className="flex justify-between neue-montreal-mono text-sm font-[450]">
						<div>PORTFOLIO'25</div>
						<div>DESIGN + DEVELOPMENT</div>
					</div>
				</div>
			</div>
			<div className="h-screen w-full mt-48">
				<SkillsSection />
			</div>
		</div>
	)
}

export default Home;