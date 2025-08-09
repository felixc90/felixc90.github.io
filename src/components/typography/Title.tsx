import { useEffect, useState } from "react";

const Title = ({ children, className }: { children: string, className?: string }) => {
  const [playEntryAnimation, setPlayEntryAnimation] = useState(true);

  useEffect(() => {
    const totalDuration = 750 + (children.length - 1) * 100;
    const timer = setTimeout(() => setPlayEntryAnimation(false), totalDuration);
    return () => clearTimeout(timer);
  }, [children.length]);

  return (
    <div
      className={[
				"mondwest font-extrabold flex",
				className ?? " ",
				(playEntryAnimation ? "bounce-onload" : "")
			].join(' ')
      }
    >
      {children.split("").map((c, i) => (
        <span
          key={i}
          className="bounce-title"
          style={playEntryAnimation ? { animationDelay: `${i * 100}ms` } : {}}
        >
          {c}
        </span>
      ))}
    </div>
  );
};

export default Title;
