import React from 'react';

export interface ICardBlockProps {
  link?: string;
  title?: string;
  text?: string;
  postReadTime?: string;
  postDate?: string;
  authorName?: string;
  authorAvatarUrl?: string;
  authorLink?: string;
}

const CardBlock: React.FC<ICardBlockProps> = ({
  link,
  title,
  text,
  postReadTime,
  postDate,
  authorName,
  authorAvatarUrl,
  authorLink,
}) => {
  return (
    <div className="card-block">
      {!!title && (
        <h2 className="card-title">
          <a href={link ?? '#'}>{title}</a>
        </h2>
      )}
      {!!text && <h4 className="card-text">{text}</h4>}
      <div className="metafooter">
        <div className="wrapfooter">
          <span className="meta-footer-thumb">
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
          </span>
          <span className="author-meta">
            <span className="post-name">
              <a href={authorLink ?? '#'}>{authorName ?? 'Admin'}</a>
            </span>
            <br />
            {!!postDate && <span className="post-date">{postDate}</span>}
            {!!postDate && !!postReadTime && <span className="dot"></span>}
            {!!postReadTime && (
              <span className="post-read">{postReadTime}</span>
            )}
          </span>
          <span className="post-read-more">
            <svg
              className="svgIcon-use"
              width="25"
              height="25"
              viewBox="0 0 25 25"
            >
              <path
                d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export { CardBlock };
