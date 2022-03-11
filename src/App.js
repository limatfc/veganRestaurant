import { Routes, Route } from "react-router-dom";
import NavigatioBar from "./components/NagivationBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import "./App.css";

export default function App() {
  return (
    <div>
      <NavigatioBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={`/:categoryName`} element={<Categories />} />
        <Route path={"/:categoryName/:dishName"} element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
