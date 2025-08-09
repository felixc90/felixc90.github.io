import { ExternalLink } from "lucide-react";
import ScrambleText from "./ScrambleText";

interface CardProps {
	data: {
    name: string;
		image: string;
		description: string[];
		link: string;
		technologies: string[];
		alt: string;
		summary: string;
	}
}

const Card = ({ data }: CardProps) => {
	const {name, summary, description, link, image, alt, technologies} = data;

	return (
		<div className="flip_card h-96 overflow-visible">
			<div className="flip_card__content relative transition-transform duration-1000 h-full">
				<div className="flip_card__front flex flex-col rounded-lg p-3 absolute top-0 bottom-0 right-0 left-0 bg-darker">		
					<div className="rounded-lg w-fit min-h-42 overflow-clip">
						<img className="w-fit min-h-42 overflow-clip" src={image} alt={alt} />
					</div>
					<div className="ml-2 text-lighter font-[300] flex flex-col justify-between h-full">
						<div>
							<div className="mt-2 mb-1 text-xl">
								{ name }
							</div>
							<div className="tracking-wide text-[13px]">
								{ summary }
							</div>
						</div>
						<div>
							<ScrambleText duration={1.2} className="text-[11px]/tight neue-montreal-mono h-fit flex flex-col-reverse">
								{ "Made with " + technologies.join(", ") }
							</ScrambleText>
						</div>
					</div>
				</div>
				<div className="flip_card__back absolute top-0 bottom-0 right-0 left-0 p-5 bg-darker flex flex-col rounded-lg justify-between">
					<ul className="tracking-wide text-[13px] text-lighter font-[300] list-inside list-[square]">

						{ description.map((text, j) => {
							const urlRegex = /(https?:\/\/[^\s]+)/g;
							const parts = text.split(urlRegex);

							return (
							<li key={j} className="mb-2">
								{
									parts.map((part, i) => {
										return urlRegex.test(part) ? (
										<a key={i} href={part.split('|')[0]} target="_blank" rel="noopener noreferrer" className="underline">
											{part.split('|')[1]}
										</a>
									) : (
										<span key={i}>{part}</span>
									)
									})
								}
							</li>);
						}
					)}
					</ul>
					<div className="flex flex-row-reverse">
						<ExternalLink color="var(--lighter)" size={'24px'} className="hover:cursor-pointer" onClick={()=> window.open(link, "_blank")}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card;