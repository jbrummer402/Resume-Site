type Comment = {
	content: string;
	userPosted: user;
} 

export type Post = {
	title: string;
	tags: string[];
	content: string;
	comments: Comment[];
}
