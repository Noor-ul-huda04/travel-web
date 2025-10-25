import React from 'react';
import { Link } from 'react-router-dom';

 function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} className="blog-image" />
      <div className="blog-content">
        <h3 className="blog-title">{post.title}</h3>
        <p className="blog-summary">{post.summary}</p>
        <Link to={`/blog/${post.id}`}>
          <button className="read-more-btn">Read More</button>
        </Link>
      </div>
    </div>
  );
}
export default BlogCard;