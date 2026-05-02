import ScrambleText from "@/components/ui/ScrambleText";
import Square from "@/components/ui/Square";
import UnpixelateImage from "@/components/ui/UnpixelateImage";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const imageData = {
    src: "/images/profile.png",
    alt: "Felix Cao",
    width: 824,
    height: 1100,
  };

  const imageContainer = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | null>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (imageContainer.current) {
        const containerWidth = imageContainer.current.offsetWidth;
        const aspectRatio = imageData.height / imageData.width;
        setContainerHeight(containerWidth * aspectRatio);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    if (imageContainer.current) observer.observe(imageContainer.current);
    return () => observer.disconnect();
  }, [imageData.height, imageData.width]);

  return (
    <div className="bg-light min-h-[calc(100vh+2rem)] px-8 sm:px-16 py-8 pb-32 text-dark">
      <div className="flex-col flex justify-around mt-14">
        <div className="flex justify-between w-full neue-montreal-mono text-xs font-[450] mb-8">
          <div className="flex gap-4">
            <Square className="hidden sm:block" />
            <Square />
            <Square className="hidden sm:block" />
          </div>
          <ScrambleText
            duration={1.5}
            chars="upperCase"
            className="min-w-[12ch] text-center"
          >
            BUILDING
          </ScrambleText>
          <Square />
          <Square />
          <Square />
          <ScrambleText
            duration={1.5}
            chars="upperCase"
            className="min-w-[12ch] text-center"
          >
            RUNNING
          </ScrambleText>
          <div className="flex gap-4">
            <Square className="hidden sm:block" />
            <Square />
            <Square className="hidden sm:block" />
          </div>
        </div>
        <div className="w-full">
          <div className="md:flex mt-8">
            <div className="w-fit md:w-1/2 flex justify-around mb-12 md:mr-6">
              <div className="w-1/2 min-w-70">
                <div className="border-2 border-dark">
                  <div
                    className="m-4"
                    ref={imageContainer}
                    style={containerHeight ? { height: containerHeight } : {}}
                  >
                    <UnpixelateImage
                      src={imageData.src}
                      alt={imageData.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="neue-montreal-mono text-xs mt-1 flex justify-between tracking-wider">
                  <div>
                    {imageData.width} × {imageData.height}
                  </div>
                  <div className="tracking-wide">{imageData.src}</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 text-sm sm:text-xs lg:text-sm font-[450] tracking-tighter neue-montreal-mono mt-2">
              <div className="mb-4">PROFILE</div>
              <div className="mb-4">
                <ScrambleText chars="upperCase">NAME</ScrambleText>
                <div className="ml-4">Felix Cao</div>
              </div>
              <div className="mb-4">
                <ScrambleText chars="upperCase">LOCATION</ScrambleText>
                <div className="ml-4">Sydney, Australia</div>
              </div>
              <div className="mb-4">
                <ScrambleText chars="upperCase">EDUCATION</ScrambleText>
                <div className="ml-4">University of New South Wales</div>
                <div className="ml-4">
                  Bachelor of Science (Statistics) / Science (Computer Science)
                </div>
              </div>
              <div className="mb-4">
                <ScrambleText chars="upperCase">FOCUS</ScrambleText>
                <div className="ml-4">
                  Full-stack engineering; Computer graphics
                </div>
              </div>
              <div className="mb-4">
                <ScrambleText chars="upperCase">DESCRIPTION</ScrambleText>
                <div className="ml-4 max-w-[30rem]">
                  I love building things that help make peoples' lives easier
                  and make impact on the world. I enjoy working on projects that
                  test my software design skills, mathematics ability and
                  creativity. In my spare time, I like to run track and read
                  books about space.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
