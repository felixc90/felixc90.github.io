import { NeueMontrealMono } from "../../styles/fonts"

const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Work', href: '/work', current: false },
	{ name: 'Contact', href: '/contact', current: false },
]

export default function Navbar() {
  return (
    <nav className="fixed w-full mt-10 px-8 z-10">
			<div className="flex justify-between">
				<div className="">
					LOGO
				</div>
				<div className="flex text-md gap-12">
					{navigation.map((item) => (
						<a
							style={NeueMontrealMono}
							key={item.name}
							href={item.href}
						>
							[{item.name}]
						</a>
					))}
				</div>
			</div>
    </nav>
  )
}