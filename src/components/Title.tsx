import { useEffect, useState } from "react";
import ArchiveBox from "../assets/icons/ArchiveBox";
import Icon from "./title/Icon";
import { FileMusic, Medal, PaintBucket, Ship } from "lucide-react";

export default function Title() {
	const [time, setTime] = useState<Date>(new Date(0,0,0));

	useEffect(() => {
		const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId);
	}, [])

	const NeueMontrealStyle = { fontFamily: "Neue Montreal", fontWeight: "500" };
	const NeueMontrealLightStyle = { fontFamily: "Neue Montreal", fontWeight: "100" };
	const PPEikoStyle = { fontFamily: "PPEiko", fontWeight:"500" };
	const PPEikoItalicStyle = { fontFamily: "PPEiko", fontWeight:"300", fontStyle: "italic"};

	const navItems = ["Home", "About", "Experience", "Projects"]


	const [iconSize, iconStrokeWidth] = [30, 1];

	return (
		<div className="h-screen bg-amber-50">
			<div className="p-10">
				<div 
						className="flex justify-between w-full uppercase my-2 text-sm" 
						style={NeueMontrealStyle}
					>
						<p>
							2025 Portfolio
						</p>
						<div className="flex flex-col">
							{
								navItems.map((item) => (
									<a>
										{item}
									</a>
								))
							}
						</div>
					</div>
				<div className="mb-20">
					<div>
						{
							["Felix", "Cao"].map(word => (
								<span className="mr-30">
									{word.split('').map((character, i) => (
										<span
											className="text-9xl"
											style={[1, 3, 7].includes(i) ? PPEikoItalicStyle : PPEikoStyle}
										>
											{character}
										</span>
									))}
								</span>
							))
						}
					</div>
					<hr />
					<div 
						className="flex justify-between w-full uppercase my-2 text-xs" 
						style={NeueMontrealStyle}
					>
						<p>
							Software Engineer
						</p>
						<p>
							Contact
						</p>
						<p>
							Résumé
						</p>
						<p>
							Sydney {`${time.toTimeString().split(' ')[0]}`}
						</p>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="text-7xl ml-70" style={NeueMontrealStyle}>
						Sydney
					</div>
					<div 
						className="flex mr-60 my-auto gap-4"
					>
						<Icon>
							<Ship strokeWidth={iconStrokeWidth} size={iconSize}/>
						</Icon>
						<Icon>
							<Medal strokeWidth={iconStrokeWidth} size={iconSize}/>
						</Icon>
						<Icon>
							<FileMusic strokeWidth={iconStrokeWidth} size={iconSize}/>
						</Icon>
						<Icon>
							<PaintBucket strokeWidth={iconStrokeWidth} size={iconSize}/>
						</Icon>
					</div>
				</div>
				<hr />
				<div className="text-7xl" style={NeueMontrealStyle}>
					<div>
						<span className="mr-60">
							Software
						</span>
						<span>
							Engineer
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}