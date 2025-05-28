import { useEffect, useState } from "react";
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


	const [iconSize, iconStrokeWidth] = [35, 1];

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
				<div className="mb-15">
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
				<div>
					<div className="flex justify-between my-2">
						<div 
							className="flex mr-30 my-auto gap-4 mb-3"
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
						<div className="text-5xl tracking-wide mt-5" style={NeueMontrealStyle}>
							<span className="mr-6">
								Software
							</span>
							<span>
								Engineer
							</span>
						</div>
					</div>
					<hr />
					<div className="flex justify-between">
						<div className="text-5xl tracking-wide" style={NeueMontrealStyle}>
							<span className="mr-6">
								Based
							</span>
							<span className="mr-6">
								in
							</span>
							<span>
								Sydney
							</span>
						</div>
						<div className="flex gap-10 mt-7 mx-20">
							{
								[1, 2, 3].map((i) => (
									<div className="w-50 h-30 bg-amber-100">
										{`Photo ${i}`}
									</div>
								))
							}
						</div>

					</div>
				</div>
				
			</div>
		</div>
	)
}