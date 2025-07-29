import { NeueMontrealLight } from "../../styles/fonts";

const About = () => {
	const getAge = () => {
    const birthDate = new Date(2003, 2, 17);
		const now = new Date()

    let years = (now.getFullYear() - birthDate.getFullYear());

    if (now.getMonth() < birthDate.getMonth() || 
        now.getMonth() == birthDate.getMonth() && now.getDate() < birthDate.getDate()) {
        years--;
    }

		return years;
	}

	const description = `
		I'm a ${getAge()}-year-old Australian software developer with a focus on back-end engineering. 
		I enjoy exploring complex problems in software design and data engineering, and
		crafting elegant solutions that deliver real value to people.
	`;

	return (
		<div>
			<div className="flex flex-col bg-black text-white py-20">
				<div className="flex gap-6 mx-auto">
					<div style={{...NeueMontrealLight}} className="text-6xl my-auto align-middle">{"("}</div>
					<div className="max-w-180 text-3xl text-center my-auto align-middle">
						{description}
					</div>
					<div style={{...NeueMontrealLight}} className="text-6xl my-auto align-middle">{")"}</div>
				</div>
			</div>
		</div>
	)
}



export default About;