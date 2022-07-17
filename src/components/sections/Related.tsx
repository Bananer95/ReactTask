import React from "react";
import { ArticleCard } from "../elements/Card";

//mock data
import { relatedArticles } from "./relatedMockData";

const RelatedSection = () => {
	return (
		<section className="related-section">
			<div className="graybg">
				<div className="container">
					<div className="row listrecent listrelated">
						{relatedArticles.map((article) => (
							<div key={article.id} className="col-md-4">
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
		</section>
	);
};

export { RelatedSection };
