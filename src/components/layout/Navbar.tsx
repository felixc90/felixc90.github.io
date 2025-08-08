import { useNavigate } from "react-router"
import Button from "../ui/Button";

const navigation = [
  { name: 'About', href: '/about', current: false },
	// { name: 'Blog', href: '/blog', current: false },
	{ name: 'Contact', href: '/contact', current: false },
]

export default function Navbar() {
	const navigate = useNavigate();
  return (
    <nav className="fixed w-full z-10 neue-montreal-mono font-[450] px-16 pt-8">
			<div className="flex justify-between">
				<Button onClick={() => navigate("/")} variant="filled">
					FELIX CAO
				</Button>
				<div className="flex text-sm gap-8">
					{navigation.map((item) => (
						<Button
							variant="outline"
							key={item.name}
							onClick={() => navigate(item.href)}
						>
							{item.name.toUpperCase()}
						</Button>
					))}
				</div>
			</div>
    </nav>
  )
}