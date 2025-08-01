import { ExternalLink } from "lucide-react";

interface CardProps {
	data: {
    name: string;
		image: string;
		description: string;
		link: string;
		technologies: string[];
	}
}

const Card = ({ data }: CardProps) => {
	const {name, description, link, image, technologies} = data;

	return (
		<div className="h-96 bg-darker rounded-lg p-3 flex flex-col">
			<div className="rounded-lg w-full h-42 overflow-clip">
				<img src={image} />
			</div>
			<div className="ml-2 text-lighter font-[300] flex flex-col justify-between h-full">
				<div>
					<div className="mt-2 mb-1 text-xl">
						{ name }
					</div>
					<div className="text-sm">
						{ description }
					</div>
				</div>
				<div>
					<div className="flex justify-between gap-4">
						<div className="text-xs/tight neue-montreal-mono h-fit flex flex-col-reverse">
							Made with { technologies.join(", ") }
						</div>
						<div className="flex flex-col-reverse">
							<ExternalLink color="var(--lighter)" className="hover:cursor-pointer" onClick={()=> window.open(link, "_blank")}/>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Card;