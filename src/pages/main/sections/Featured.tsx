import React from 'react';
import { ArticleCardRow, CardColumns } from '../../../components/elements/Card';

import { SectionTitle } from '../../../components/sections/common';

//mock data
import { featuredArticles } from './articlesMockData';
import { navigation } from '../../../layouts/components/header/Header';

const FeaturedSection = () => {
  return (
    <section className="featured-posts">
      <SectionTitle>Featured</SectionTitle>
      <CardColumns className="listfeaturedtag">
        {featuredArticles.map((article) => (
          <ArticleCardRow
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
        ))}
      </CardColumns>
    </section>
  );
};

export default FeaturedSection;
