import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* <!-- About Section --> */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                        <p className="text-gray-400">
                            Welcome to my personal blog! I share thoughts, stories, and insights on various topics. Follow along to explore more.
                        </p>
                    </div>

                    {/* <!-- Quick Links Section --> */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="/blogs" className="text-gray-400 hover:text-white">Blogs</a>
                            </li>
                            <li>
                                <a href="/cv" className="text-gray-400 hover:text-white">CV</a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Social Media Section --> */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                        <p className="text-gray-400 mb-4">Let’s connect on social media:</p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/roshan56rao?igsh=aDc2Z2N5YWkyaWRt" target="_blank" className="hover:text-pink-500">
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                            <a href="https://in.linkedin.com/in/roshanlal1" target="_blank" className="hover:text-blue-600">
                                <i className="fab fa-linkedin-in text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    © 2025 Roshan Lal. All rights reserved.
                </div>
            </div>
        </footer>
    );
}