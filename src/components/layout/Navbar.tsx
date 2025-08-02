import { useNavigate } from "react-router"
import Button from "../ui/Button"

const navigation = [
  { name: 'About', href: '/about', current: false },
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
				<div className="flex text-sm gap-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
						>
							{item.name.toUpperCase()}
						</a>
					))}
				</div>
			</div>
    </nav>
  )
}