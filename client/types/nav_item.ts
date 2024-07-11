

export type NavItem = {
	label: string;
	sublabel?: string | null;
	href: string;
	children?: NavItem[] | null; 
}
