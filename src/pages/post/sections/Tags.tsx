import React from "react";
import { ITag } from "../../../types";

export interface ITagsProps {
	tags?: ITag[];
}

const Tags: React.FC<ITagsProps> = ({ tags = [] }) => {
	return (
		<div className="after-post-tags">
			<ul className="tags">
				{tags.map((tag, index) => (
					<li key={index}>
						<a href={tag.link ?? "#"}>{tag.title}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Tags;
