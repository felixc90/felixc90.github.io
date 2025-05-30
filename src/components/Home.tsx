import { useEffect, useState } from "react";
import { FileMusic, Medal, PaintBucket, Ship } from "lucide-react";

export default function Home() {
	const [time, setTime] = useState<Date>(new Date(0,0,0));

	useEffect(() => {
		const intervalId = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(intervalId);
	}, [])

	const NeueMontrealStyle = { fontFamily: "Neue Montreal", fontWeight: "500" };
	const PPEikoStyle = { fontFamily: "PPEiko", fontWeight:"500" };

	const navItems = ["Home", "About", "Experience", "Projects"]

	return (
		<div className="h-screen bg-amber-50">
			<div className="p-10 flex flex-col justify-between h-full">
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
					<div className="text-8xl">
						<span className="mr-10" style={PPEikoStyle}>
							Felix
						</span>
						<span style={PPEikoStyle}>
							Cao
						</span>
					</div>
				</div>
				<div>
					<div 
						className="flex justify-between w-full uppercase my-2 text-xs" 
						style={NeueMontrealStyle}
					>
						<p>
							Coding from Australia
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
					<hr />
				</div>
			</div>
		</div>
	)
}