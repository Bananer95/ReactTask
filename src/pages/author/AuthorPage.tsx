import React from "react";

//layout
import { MainLayout } from "../../layouts";
import ArticlesList from "./sections/ArticlesList";

//mock data
import { authorPosts } from "./articlesMockData";
import { author } from "./authorMockData";

import AuthorMeta from "./sections/AuthorMeta";

const AuthorPage = () => {
	return (
		<MainLayout>
			<AuthorMeta name={author.name} description={author.description} avatarUrl={author.avatarUrl} />
			<ArticlesList list={authorPosts} />
		</MainLayout>
	);
};

export default AuthorPage;
