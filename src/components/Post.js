import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    import(`../posts/${postId}.md`)
      .then(res => fetch(res.default))
      .then(res => res.text())
      .then(setContent);
  }, [postId]);

  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Post;