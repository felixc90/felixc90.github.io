export const CollisionTypes = [
	{
		label: 'Empty',
		value: 'Empty',
		description: 'Nothing here...',
		color: 'blue',
	},
	{
		label: 'Wall',
		value: 'Wall',
		description: 'Blocked!',
		color: 'red',
	},
	{
		label: 'Floor',
		value: 'Floor',
		description: 'Walk on me',
		color: 'green',
	}
]

export const CollisionTypeId = new Map<string, number>(
	CollisionTypes.map((type, i) => [type.value, i])
)