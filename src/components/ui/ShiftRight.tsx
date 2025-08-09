import { useEffect, useState, ReactNode } from "react";

interface ShiftRightProps {
	children: ReactNode;
	delay?: number; // delay before animation starts, ms
}

const ShiftRight = ({ children, delay = 0 }: ShiftRightProps) => {
	const [playEntryAnimation, setPlayEntryAnimation] = useState(false);

	useEffect(() => {
		const animationDuration = 750;

		const delayTimer = setTimeout(() => setPlayEntryAnimation(true), delay);
		const animationTimer = setTimeout(() => setPlayEntryAnimation(false), delay + animationDuration);

		return () => {
			clearTimeout(delayTimer);
			clearTimeout(animationTimer);
		};
	}, [delay]);

	return (
		<div className={"shift-right " + (playEntryAnimation ? "shift-right-onload" : "")}>
			{children}
		</div>
	);
};

export default ShiftRight;
