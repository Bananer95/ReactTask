import React from "react";
import { RelatedSection } from "../../components/sections/Related";

//layout
import { MainLayout } from "../../layouts";

import Share from "./sections/Share";
import Tags from "./sections/Tags";
import Content from "./sections/Content";
import Heading from "./sections/Heading";

//mock data
import { post } from "./postMockData";

const PostPage = () => {
	return (
		<MainLayout>
			<div className="container">
				<div className="row">
					<div className="col-md-2 col-xs-12">
						<Share />
					</div>
					<div className="col-md-8 col-md-offset-2 col-xs-12">
						<Heading
							title={post.title}
							aboutAuthor={post.aboutAuthor}
							authorLink={post.authorLink}
							authorName={post.authorName}
							authorAvatarUrl={post.authorAvatarUrl}
							postDate={post.postDate}
							postReadTime={post.postReadTime}
						/>
						<img className="featured-image img-fluid" src="assets/img/demopic/10.jpg" alt=""></img>
						<Content>
							<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
						</Content>
						<Tags tags={post.tags} />
					</div>
				</div>
			</div>
			<RelatedSection />
		</MainLayout>
	);
};

export default PostPage;
