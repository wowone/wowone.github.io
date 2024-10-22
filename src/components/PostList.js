import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Function to import all markdown files from the posts directory
const importAll = (r) => r.keys().map((key) => ({
  path: key,
  url: r(key)
}));
const markdownFiles = importAll(require.context('../posts', false, /\.md$/));

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postPromises = markdownFiles.map(async (file) => {
        const response = await fetch(file.url);
        const text = await response.text();
        const title = text.split('\n')[0].replace('# ', ''); // Assuming the first line is the title
        const tags = text.match(/#\w+/g) || []; // Extract hashtags
        const id = file.path.split('/').pop().replace('.md', '');
        return { id, title, tags };
      });

      const posts = await Promise.all(postPromises);
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
            <div>
              {post.tags.map((tag) => (
                <Link key={tag} to={`/tag/${tag.replace('#', '')}`}>
                  {tag}{' '}
                </Link>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;