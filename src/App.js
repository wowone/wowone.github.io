import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import PostList from './components/PostList';
import Tag from './components/Tag';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/post/:postId" element={<Post />} />
      <Route path="/tag/:tag" element={<Tag />} />
    </Routes>
  </Router>
);

export default App;