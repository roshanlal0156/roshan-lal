import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import 'github-markdown-css/github-markdown.css';

import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const BlogDetails = () => {
    const { slug } = useParams();  // Get the slug from URL
    const [blog, setBlog] = useState(null);

    const getBlog = () => {
        axios.get(`/api/blogs/${slug}`).then((response) => {
            setBlog(response.data);
        }).catch((error) => {
            console.error("Error fetching blog:", error);
        });
    };

    useEffect(() => {
        getBlog();
    }, [slug]); // Refetch when slug changes

    if (!blog) {
        return <div>Loading...</div>; // Show loading while fetching data
    }

    return (
        <div>
            <div className="text-center text-white bg-gray-800 text-7xl rounded-md p-4">
                {blog.title}
            </div>
            <div className="flex justify-center">
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: md.render(blog.content) }} />
            </div>
        </div>
    );
};

export default BlogDetails;