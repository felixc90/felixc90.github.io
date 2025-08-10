import { useNavigate } from "react-router"
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Shift from "../ui/Shift";

interface NavType {
    name: string;
    href: string;
    current: boolean;
}

const navigation = [
	{ name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
	// { name: 'Blog', href: '/blog', current: false },
	{ name: 'Contact', href: '/contact', current: false },
]

export default function Navbar() {
	const navigate = useNavigate();
	const [ active, setActive ] = useState(false);

	const handleClick = (item?: NavType) => {
		setActive(false);
		navigate(item?.href ?? "/");
	}

	const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

	useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

	useEffect(() => {
    if (width >= 640) {
			setActive(false);
		}
  }, [active, width]);

  return (
		<div>
			<nav className="fixed w-full neue-montreal-mono font-[450] px-8 sm:px-16 pt-8 z-11">
				<div className="flex justify-between">
					<div>
						<Button onClick={() => handleClick()} variant="filled">
							FELIX CAO
						</Button>
					</div>
					<div className="hidden sm:flex gap-8">
						{ navigation.filter((_, i) => i > 0).map((item) => (
							<Button
								variant="outline"
								key={item.name}
								onClick={() => handleClick(item)}
							>
								<div className="flex justify-around">
									{item.name.toUpperCase()}
								</div>
							</Button>
						))}
					</div>
					<div className="flex gap-3 flex-col sm:hidden">
						<div className="flex flex-row-reverse">
							<Button
								className="flex sm:hidden text-sm"
								variant={active ? "filled" : "outline"}
								onClick={() => setActive(!active)}
							>
								<div className="flex justify-around">
									MENU
								</div>
							</Button>
						</div>
						{navigation.map((item, i) => (
							<div key={i} className={`
								flex-row-reverse flex
								transition-opacity duration-200 ease-in-out
								${active ? "opacity-100" : "opacity-0"}
								`}>
								<Shift className={active ? "" : "animate-none "} trigger={active} dir={"left"} delay={200 + 150 * i}>
									<Button
										variant="outline"
										key={item.name}
										onClick={() => handleClick(item)}
									>
										<div className="flex justify-around">
											{item.name.toUpperCase()}
										</div>
									</Button>
								</Shift>
							</div>
						))}
					</div>
				</div>
			</nav>
				<div
					className={`sm:hidden fixed inset-0 z-10 bg-white/10 backdrop-blur-md transition-opacity duration-200 ${
						active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					}`}
				/>
		</div>
		
  )
}