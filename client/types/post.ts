type Comment = {
	content: string;
} 

export type Post = {
  id: string;
	title: string;
	tags: string[];
	content: string;
	comments: Comment[];
  date: string;
}
