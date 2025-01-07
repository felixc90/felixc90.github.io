export const CollisionTypes = [
	{
		label: 'Empty',
		value: 'Empty',
		description: 'Nothing here...',
		color: [59, 91, 165]
	},
	{
		label: 'Wall',
		value: 'Wall',
		description: 'Blocked!',
		color: [232, 122, 93]
	},
	{
		label: 'Floor',
		value: 'Floor',
		description: 'Walk on me',
		color: [243, 185, 65],
	}
]

export const CollisionTypeId = new Map<string, number>(
	CollisionTypes.map((type, i) => [type.value, i])
)