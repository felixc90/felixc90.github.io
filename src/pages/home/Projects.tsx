import Heading from "@/components/typography/Heading"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel"

const Projects = () => {
	return (
		<div>
			<Heading>Projects.</Heading>
			<Carousel>
				<CarouselContent>
					<CarouselItem className="basis-1/3">...</CarouselItem>
					<CarouselItem className="basis-1/3">...</CarouselItem>
					<CarouselItem className="basis-1/3">...</CarouselItem>
					<CarouselItem className="basis-1/3">...</CarouselItem>
					<CarouselItem className="basis-1/3">...</CarouselItem>
					<CarouselItem className="basis-1/3">...</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default Projects