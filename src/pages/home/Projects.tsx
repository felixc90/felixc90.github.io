import Heading from "@/components/typography/Heading"
import Card from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, ScrollBar } from "@/components/ui/Carousel"
import data from '@/data/projects.json';

const Projects = () => {
	const items = data.projects;

	return (
		<div>
			<div className="-mb-8">
				<Heading>Projects.</Heading>
			</div>
			<Carousel className="w-4/5 sm:w-9/10 mx-auto">
				<CarouselPrevious />
				<CarouselContent className="-ml-12 h-[36rem]">
					{ items.map((item, i) => (
						<CarouselItem key={i} className="basis-full sm:basis-1/2 lg:basis-1/3 pl-12 h-fit">
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