import React from "react";
import { Link } from "react-router-dom";

const BlogListItem = ({ blog }) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-8 bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="lg:w-1/3 bg-cover bg-center" style={{ backgroundImage: `url(${blog.imageUrl})` }}>
        {/* Optional: Overlay for better text visibility */}
        <div className="h-full bg-gradient-to-t from-black opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 transition duration-300">
            <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </h2>
          <p className="text-sm text-gray-500 mt-2">{blog.created_at}</p>
          <p className="text-gray-600 mt-4">{blog.description}</p>
        </div>

        {/* Read More Button */}
        <div className="mt-6">
          <Link
            to={`/blogs/${blog.slug}`}
            className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;