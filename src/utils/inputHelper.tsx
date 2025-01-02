export const ensureNumber = (value: number | string, defaultValue = 0) => {
	return typeof value === 'string' ? defaultValue : value;
}