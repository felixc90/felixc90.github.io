
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollTrigger) 



interface ScrambleTextProps {
	children: string
	className?: string;
	duration?: number;
	chars?: string
}

const ScrambleText = ({ children, className, duration = 2, chars = "upperAndLowerCase" }: ScrambleTextProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	useGSAP(() => {
		gsap.to(ref.current, {
			duration: duration, 
			scrambleText: {
				text: children,
    		chars: chars
			},
			scrollTrigger: {
				trigger: ref.current,
				toggleActions: "play reset play reset"
			}
		},);
	}, [children]);

	return (
		<div ref={ref} className={className}>
			{ children }
		</div>
	)
}

export default ScrambleText;