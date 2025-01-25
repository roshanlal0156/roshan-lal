import React from "react";
import Header from "../components/Header"; // Common Header
import Footer from "../components/Footer"; // Common Footer

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (Navigation bar) */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;