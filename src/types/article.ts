export interface IArticleCard {
	id: number;
	link?: string;
	title?: string;
	text?: string;
	postReadTime?: string;
	postDate?: string;
	authorName?: string;
	authorAvatarUrl?: string;
	authorLink?: string;
	thumbUrl?: string;
}

export interface IArticle {
	id: number;
	title: string;
	content: string;
	tags?: ITag[];
	aboutAuthor?: string;
	postReadTime?: string;
	postDate?: string;
	authorName?: string;
	authorAvatarUrl?: string;
	authorLink?: string;
}

export interface ITag {
	link?: string;
	title: string;
}
