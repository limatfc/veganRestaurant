import { Routes, Route } from "react-router-dom";
import NavigatioBar from "./components/NagivationBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import "./App.css";

// file extension -1, rename App.js to .jsx
// correct name of the page folder
export default function App() {
  return (
    <div>
      <NavigatioBar />
      <Routes>
        {/* Naming, you can just call this :category/ */}
        <Route path="/" element={<HomePage />} />
        <Route path={`/:categoryName`} element={<Category />} />
        {/* dishName can be only dish or product or something because dish is a categeroy like drinks and desserts */}
        <Route path={"/:categoryName/:dishName"} element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
