import { MouseEventHandler, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface SplitTextProps { 
	children: string; 
	className?: string; 
	delay?: number;
	type?: "words" | "lines" | "chars";
	stagger?: number;
	onClick?: MouseEventHandler<HTMLDivElement>,
	x?: number;
	y?: number;
}

const MySplitText = ({ children, className, delay = 0, type = "words", stagger = 0.01, y = 80, x = 0 }: SplitTextProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const splitRef = useRef<SplitText | null>(null);
  const animRef = useRef<GSAPAnimation | null>(null);

  useGSAP(() => {
    if (!ref.current) return;

    if (animRef.current) {
      animRef.current.progress(1).kill();
      animRef.current = null;
    }
    if (splitRef.current) {
      splitRef.current.revert();
      splitRef.current = null;
    }

    const createAnimation = () => {
      if (!ref.current) return;

      splitRef.current = new SplitText(ref.current, {
        type: "words,chars,lines",
        linesClass: "split-line",
      });

      animRef.current = gsap.from(splitRef.current[type], {
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "play none none none",
          markers: false,
        },
        delay: delay,
        duration: 1,
        ease: "circ.out",
        y: y,
				x: x,
        stagger: stagger,
				onComplete: () => {
					if (splitRef.current) {
						splitRef.current.revert();
						splitRef.current = null;
					}
				}
      });
    };

    if (document.fonts) {
      document.fonts.ready.then(createAnimation);
    } else {
      setTimeout(createAnimation, 100);
    }

    return () => {
      if (animRef.current) {
        animRef.current.kill();
        animRef.current = null;
      }
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
      ScrollTrigger.refresh();
    };
  }, [children]);

  return (
    <div className={`${className ?? ""} overflow-hidden h-fit`} ref={ref}>
      {children}
    </div>
  );
};

export default MySplitText;
