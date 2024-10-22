import React from 'react';
import { Link, useParams } from 'react-router-dom';

const posts = [
  { id: 'sample-post', title: 'Sample Post', tags: ['tag1', 'tag2'] }
];

const Tag = () => {
  const { tag } = useParams();
  const filteredPosts = posts.filter(post => post.tags.includes(tag));

  return (
    <div>
      <h2>Posts tagged with #{tag}</h2>
      {filteredPosts.map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Tag;