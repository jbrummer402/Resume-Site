
export type NavChild = {
	href: string;
	label: string;
	sublabel: string;
}

export type NavItem = {
	label: string;
	href: string;
	children: NavChild[]; 
}
