import React from "react";
import { ArticleCard } from "../../../components/elements/Card";
import { IArticleCard } from "../../../types";

export interface IArticleCardsListProps {
	list: IArticleCard[];
}

const ArticlesList: React.FC<IArticleCardsListProps> = ({ list }) => {
	return (
		<div className="graybg authorpage">
			<div className="container">
				<div className="listrecent listrelated">
					{list.map((article) => (
						<div key={article.id} className="authorpostbox">
							<ArticleCard
								key={article.id}
								link={article.link}
								thumbUrl={article.thumbUrl}
								title={article.title}
								text={article.text}
								postDate={article.postDate}
								postReadTime={article.postReadTime}
								authorName={article.authorName}
								authorLink={article.authorLink}
								authorAvatarUrl={article.authorAvatarUrl}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ArticlesList;
