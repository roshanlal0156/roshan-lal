import React from "react";
import BlogListItem from "../components/BlogListItem";

const BlogList = ({ blogs }) => {
    console.log(blogs);
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogListItem key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;