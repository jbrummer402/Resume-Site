
type Comment = {
	content: string;
	userPosted: user;
} 

export type NavItem = {
	label: string;
	sublabel: string | null;
	href: string;
	children: NavItem[] | null; 
}
export type Post = {
	title: string;
	tags: string[];
	content: string;
	comments: Comment[];
}
export type ContainerItemProps = {
  id: string;
	title: string;
	sublabel?: string | null;
	listItems?: string[] | null;
	description: string;
  background_image_path?: string | null;
	image_path?: string[] | null;
}
