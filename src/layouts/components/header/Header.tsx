import React from 'react';
import { useState } from 'react';
import { logo } from '../../../assets/img';
import { Search } from '../../../components/elements/Search';
import { Navigation } from './Navigation';
import { author } from '../../../pages/author/authorMockData';
import { post } from '../../../pages/post/postMockData';

export const navigation = [
  { name: 'Stories', to: '/' },
  { name: 'Post', to: `/post-page/${post.id}` },
  { name: 'Author', to: `/authot-page/${author.id}` },
];

const Header = () => {
  const [searchString, setSearchString] = useState('');

  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-white fixed-top mediumnavigation">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <Navigation links={navigation} />
          <Search
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export { Header };
