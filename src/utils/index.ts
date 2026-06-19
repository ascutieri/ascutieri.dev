export const capitalize = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateTextFromDate(text: string): string {
    const date = new Date(text);
	return `${date.getFullYear()} - ${capitalize(date.toLocaleDateString('pt-BR',{month: 'long'}))}`;
}