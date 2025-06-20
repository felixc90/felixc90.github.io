const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Work', href: '/work', current: false },
	{ name: 'Contact', href: '/contact', current: false },
]

export default function Navbar() {
  return (
    <nav className="fixed w-full py-2 px-8">
			<div className="flex text-xl">
				<div className="w-1/2">
					<a
						className="text-3xl"
						href={'/'}
					>
						Felix Cao
					</a>
				</div>
				<div className="flex w-1/2 my-auto justify-around">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
						>
							{item.name}
						</a>
					))}
				</div>
			</div>
    </nav>
  )
}