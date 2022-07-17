import React from 'react';
import { useParams } from 'react-router-dom';
import { IArticle } from '../../../types';

const Heading: React.FC<Partial<IArticle>> = ({
  title,
  aboutAuthor,
  postReadTime,
  postDate,
  authorName,
  authorAvatarUrl,
  authorLink,
}) => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="mainheading">
      <div className="row post-top-meta">
        <div className="col-md-2">
          <a href={authorLink ?? '#'}>
            <img
              className="author-thumb"
              src={
                authorAvatarUrl ??
                'https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x'
              }
              alt={authorName ?? ''}
            />
          </a>
        </div>
        <div className="col-md-10">
          <a className="link-dark" href={authorLink ?? '#'}>
            {authorName ?? 'Admin'}
          </a>
          {!!aboutAuthor && (
            <span className="author-aboutAuthor">{aboutAuthor}</span>
          )}
          {!!postDate && <span className="post-date">{postDate}</span>}
          {!!postDate && !!postReadTime && <span className="dot"></span>}
          {!!postReadTime && <span className="post-read">{postReadTime}</span>}
        </div>
      </div>

      <h1 className="posttitle">
        {title} №{id}
      </h1>
    </div>
  );
};

export default Heading;
