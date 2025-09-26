import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Add import for ScrollToTop

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const News = lazy(() => import("./pages/News"));
const NewsDetailPage = lazy(() => import("./pages/NewsDetailPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Loading fallback component
const Loading = () => <div className="flex justify-center items-center min-h-screen">Loading...</div>;

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop component to scroll to top on route change */}
        <div className="app-container flex flex-col min-h-screen"> {/* Add flex container */}
          <Navbar />
          <div className="flex-grow"> {/* Ensure content takes available space */}
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsDetailPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
