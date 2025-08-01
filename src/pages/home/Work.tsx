import Heading from "@/components/typography/Heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import data from '@/data/work.json';
import WTG from "./content/WTG";
import CSE from "./content/CSE";
import { JSX } from "react";

const Work = () => {
	const items = data.work;

	const content: Record<string, JSX.Element> = {
		"wtg": <WTG />,
		"cse": <CSE />
	}

	return (
		<div>
			<Heading>Work.</Heading>
			<Accordion type="multiple" className="ml-4">
				{ items.map((item, i) => (
					<AccordionItem value={i.toString()}>
						<AccordionTrigger className="hover:cursor-pointer">
							<div className="my-2">
								<div className="text-2xl font-[400]">{item.name}</div>
								<div className="text-md font-[400] neue-montreal-mono tracking-tighter hover:no-underline">
									{item.role} • {item.date}
								</div>
							</div>
						</AccordionTrigger>
						<AccordionContent>
							{ content[item.key] }
						</AccordionContent>
					</AccordionItem>
				)) }
				
			</Accordion>
		</div>
	)
}

export default Work