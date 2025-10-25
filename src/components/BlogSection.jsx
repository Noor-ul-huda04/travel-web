import React from 'react';
import BlogCard from './BlogCard';
import blogPosts from './BlogData';
import './Blog.css';
import { Outlet } from 'react-router-dom';

export default function BlogSection() {
  return (
    <section className="blog-section">
      <h2 className="blog-heading">Travel Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

   
      <div className="blog-details-section">
        <Outlet />
      </div>
    </section>
  );
}
