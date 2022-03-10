import { Routes, Route } from "react-router-dom";
import NavigatioBar from "./components/NagivationBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ProductCategories from "./pages/ProductCategories";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";

export default function App() {
  return (
    <div>
      <NavigatioBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/:productCategory`} element={<ProductCategories />} />
        <Route
          path={"/:productCategory/:dishName"}
          element={<ProductDetails />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
