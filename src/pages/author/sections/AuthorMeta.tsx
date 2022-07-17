import React from "react";

export interface IAuthorMetaProps {
	name: string;
	description?: string;
	avatarUrl?: string;
}

const AuthorMeta: React.FC<IAuthorMetaProps> = ({ name, description, avatarUrl }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-2"></div>
				<div className="col-md-8 col-md-offset-2">
					<div className="mainheading">
						<div className="row post-top-meta authorpage">
							<div className="col-md-10 col-xs-12">
								<h1>{name}</h1>
								{!!description && <span className="author-description">{description}</span>}
							</div>
							<div className="col-md-2 col-xs-12">
								<img
									className="author-thumb"
									src={
										avatarUrl ??
										"https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
									}
									alt={name ?? ""}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthorMeta;
