import { MouseEventHandler } from "react";

interface CarouselButtonProps {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
  disabled?: boolean;
}

const CarouselButton = ({
  children,
  onClick,
  className,
  disabled,
}: CarouselButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`
					${className ?? ""}
					w-fit py-1 px-2  rounded-4xl
					${
            disabled
              ? "bg-dark opacity-40 text-light border-dark border-1"
              : "bg-light text-dark cursor-pointer hover:rounded-2xl ease-linear duration-100 hover:bg-dark hover:text-light border-dark border-1"
          }
					`}
    >
      {children}
    </div>
  );
};

export default CarouselButton;
