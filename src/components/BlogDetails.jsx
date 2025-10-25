import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './BlogData';
import './Blog.css';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id.toString() === id);

  if (!blog) return <p className="blog-details">Blog not found.</p>;

  return (
    <div className="blog-details">
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <p>{blog.description}</p>
    </div>
  );
}
