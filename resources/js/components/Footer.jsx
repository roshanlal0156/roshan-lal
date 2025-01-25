import React from "react";

export default function Footer() {
    return (
        <footer class="bg-gray-800 text-gray-200">
            <div class="container mx-auto px-6 py-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* <!-- About Section --> */}
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4">About My Blog</h3>
                        <p class="text-gray-400">
                            Welcome to my personal blog! I share thoughts, stories, and insights on various topics. Follow along to explore more.
                        </p>
                    </div>

                    {/* <!-- Quick Links Section --> */}
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="/" class="text-gray-400 hover:text-white">Home</a>
                            </li>
                            <li>
                                <a href="/about" class="text-gray-400 hover:text-white">About</a>
                            </li>
                            <li>
                                <a href="/categories" class="text-gray-400 hover:text-white">Categories</a>
                            </li>
                            <li>
                                <a href="/contact" class="text-gray-400 hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Social Media Section --> */}
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4">Follow Me</h3>
                        <p class="text-gray-400 mb-4">Let’s connect on social media:</p>
                        <div class="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" class="hover:text-blue-500">
                                <i class="fab fa-facebook-f text-lg"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" class="hover:text-blue-400">
                                <i class="fab fa-twitter text-lg"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" class="hover:text-pink-500">
                                <i class="fab fa-instagram text-lg"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" class="hover:text-blue-600">
                                <i class="fab fa-linkedin-in text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    © 2025 My Blog. All rights reserved.
                </div>
            </div>
        </footer>
    );
}