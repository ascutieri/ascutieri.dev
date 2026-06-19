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

export function generateSlugFromId(text: string): string {
	const regex = /^(\d{4})-(\d{2})-(\d{2})-(.+)/;
	const pathParts = regex.exec(text);
	return pathParts?.slice(1,5).join("/") || "";
}