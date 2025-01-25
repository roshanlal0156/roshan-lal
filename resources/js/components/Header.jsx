import React from "react";

export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* <!-- Blog Logo/Title --> */}
                <div className="text-2xl font-bold text-gray-800">
                    <a href="/" className="hover:text-blue-600">Roshan Lal</a>
                </div>

                {/* <!-- Navigation Links --> */}
                <nav className="hidden md:flex space-x-6">
                    <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="/blogs" className="text-gray-600 hover:text-blue-600">Blogs</a>
                    <a href="/cv" className="text-gray-600 hover:text-blue-600">CV</a>
                </nav>

                {/* <!-- Search Bar --> */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden md:block px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none"
                    />
                    <button className="block md:hidden text-gray-600 hover:text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 12h14M12 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* <!-- Mobile Navigation (Hamburger Menu) --> */}
            <div className="md:hidden bg-gray-50 py-2 px-4">
                <nav className="flex flex-col space-y-2">
                    <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
                    <a href="/categories" className="text-gray-600 hover:text-blue-600">Categories</a>
                    <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                </nav>
            </div>
        </header>
    );
}