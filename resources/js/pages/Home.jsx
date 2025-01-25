import React from "react";

const Home = () => {
    return (
        <div className="bg-white text-gray-900 py-12 mb-16 rounded-lg shadow-lg">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold tracking-wide mb-4 animate__animated animate__fadeIn">Hello, Visitor!</h1>
                </div>

                {/* What I Do Section */}
                <section className="bg-gray-800 text-white py-12 mb-16 rounded-lg shadow-lg">
                    <div className="text-center">
                        <h2 className="text-4xl font-semibold mb-6">AbOuT mE</h2>
                        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
                            As a backend developer, I specialize in building robust APIs, working with databases, and ensuring scalability.
                            This website is where I showcase my skills, share technical articles, and provide valuable resources to the community.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <div className="flex flex-col items-center">
                                <div className="text-5xl mb-4">
                                    <i className="fas fa-code"></i>
                                </div>
                                <p className="text-lg">Building APIs</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-5xl mb-4">
                                    <i className="fas fa-database"></i>
                                </div>
                                <p className="text-lg">Database Management</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="text-5xl mb-4">
                                    <i className="fas fa-cogs"></i>
                                </div>
                                <p className="text-lg">Problem Solving</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <div className="text-center mt-8">
                    <a
                        href="/blogs"
                        className="inline-block bg-transparent text-gray-800 py-2 px-6 border border-gray-800 rounded-lg text-lg font-medium hover:bg-gray-800 hover:text-white transition-all"
                    >
                        Check Out My Latest Blogs
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;