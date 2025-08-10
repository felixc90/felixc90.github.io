import { useEffect, useState, ReactNode } from "react";

interface ShiftProps {
  children: ReactNode;
  delay?: number; // delay before animation starts, ms
  dir: "left" | "right";
  trigger?: any;
  className?: string;
}

const Shift = ({ children, delay = 0, dir, trigger, className }: ShiftProps) => {
  const [animationPhase, setAnimationPhase] = useState<"idle" | "in" | "out">("idle");

  useEffect(() => {
    const animationDuration = 750;

    setAnimationPhase("idle");

    const delayTimer = setTimeout(() => setAnimationPhase("in"), delay + 20);
    const outTimer = setTimeout(() => setAnimationPhase("out"), delay + animationDuration + 20);
    const resetTimer = setTimeout(() => setAnimationPhase("idle"), delay + animationDuration * 2 + 40);

    return () => {
      clearTimeout(delayTimer);
      clearTimeout(outTimer);
      clearTimeout(resetTimer);
    };
  }, [delay, trigger]);

  const classes = [
    className,
    `shift-${dir}`,
    animationPhase === "in" ? `shift-${dir}-onload` : "",
    animationPhase === "out" ? `shift-${dir}-exit` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
};

export default Shift;
