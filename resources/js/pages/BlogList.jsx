import React, { useEffect, useState } from "react";
import BlogListItem from "../components/BlogListItem";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = () => {
    axios.get('/api/blogs').then((response) => {
      setBlogs(response.data);
    })
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs.length + " klkl")
  if (blogs.lenght == 0) {
    <div>Loading...</div>; // Show loading while fetching data
  }

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