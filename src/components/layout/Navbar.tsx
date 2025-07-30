const navigation = [
  { name: 'About', href: '/about', current: false },
	{ name: 'Contact', href: '/contact', current: false },
]

export default function Navbar() {
  return (
    <nav className="fixed w-[calc(100%-6rem)] z-10 neue-montreal-mono font-[450]">
			<div className="flex justify-between">
				<div className="">
					FELIX CAO
				</div>
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