import Heading from "@/components/typography/Heading"
import Card from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel"
import data from '@/data/projects.json';

const Projects = () => {
	const items = data.projects;

	return (
		<div className="mb-">
			<Heading>Projects.</Heading>
			<br />
			<Carousel className="mt-4 w-[90%] mx-auto">
				<CarouselPrevious />
				<CarouselContent className="-ml-8 h-[30rem] mr-3">
					{ items.map((item, i) => (
						<CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 pl-12 h-4/5">
							<Card data={item}/>
						</CarouselItem>
					)) }
				</CarouselContent>
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default Projects