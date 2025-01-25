import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import BlogDetails from "./pages/BlogDetails";

const Root = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Learn React",
      createdAt: "January 25, 2025",
      snippet: "A beginner's guide to mastering React.js, from setting up the development environment to building real-world applications.",
      imageUrl: "https://via.placeholder.com/400x300"
    },
    {
      id: 2,
      title: "Understanding Tailwind CSS",
      createdAt: "January 20, 2025",
      snippet: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. Here's how to get started with it.",
      imageUrl: "https://via.placeholder.com/400x300"
    },
    {
      id: 3,
      title: "Understanding Tailwind CSS",
      createdAt: "January 20, 2025",
      snippet: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. Here's how to get started with it.",
      imageUrl: "https://via.placeholder.com/400x300"
    },
    {
      id: 4,
      title: "Understanding Tailwind CSS",
      createdAt: "January 20, 2025",
      snippet: "Tailwind CSS is a utility-first CSS framework that enables rapid UI development. Here's how to get started with it.",
      imageUrl: "https://via.placeholder.com/400x300"
    },
    // Add more blog objects as needed
  ];
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList blogs={blogs} />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

export default Root;