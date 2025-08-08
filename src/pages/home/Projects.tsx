import Heading from "@/components/typography/Heading"
import Card from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel"
import data from '@/data/projects.json';

const Projects = () => {
	const items = data.projects;

	return (
		<div>
			<div className="-mb-16">
				<Heading>Projects.</Heading>
			</div>
			<Carousel className="w-[90%] mx-auto">
				<CarouselPrevious />
				<CarouselContent className="-ml-8 h-[32rem]">
					{ items.map((item, i) => (
						<CarouselItem key={i} className="max-w-[360px] sm:max-w-none sm:basis-1/2 lg:basis-1/3 pl-8 h-3/5">
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