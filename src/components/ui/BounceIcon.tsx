import { useEffect, useState, ReactNode } from "react";

interface BounceIconProps {
  children: ReactNode;
  delay?: number; // delay before animation starts, ms
}

const BounceIcon = ({ children, delay = 0 }: BounceIconProps) => {
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
    <div className={"bounce-icon " + (playEntryAnimation ? "bounce-onload" : "")}>
      {children}
    </div>
  );
};

export default BounceIcon;
