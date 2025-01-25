import React from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    // Get the blog id from the URL params
    const { id } = useParams();

    // Now, you can use the `id` to fetch or display the specific blog details
    return (
        <div>
            <h1>Blog Details for ID: {id}</h1>
            {/* Display specific blog data based on the `id` */}
        </div>
    );
};

export default BlogDetails;