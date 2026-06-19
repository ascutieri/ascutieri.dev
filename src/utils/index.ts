export const capitalize = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateTextFromDate(text: string): string {
	const parts = text.split("-");
	const month = Number(parts[1]) + 1;

	const newText = `${parts[0]}-${month}`;

    const date = new Date(newText);
	return `${date.getFullYear()} - ${capitalize(date.toLocaleDateString('pt-BR',{month: 'long'}))}`;
}