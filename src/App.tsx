import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import MainPage from './pages/main';
import PostPage from './pages/post';
import AuthorPage from './pages/author';

function App() {
  const [page] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="post_page" element={<PostPage />} />
          <Route path="authot_page" element={<AuthorPage />} />

          {/* {page === 0 && <MainPage />}
          {page === 1 && <PostPage />}
          {page === 2 && <AuthorPage />} */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
