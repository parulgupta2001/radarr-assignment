import "./App.css";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { Navbar } from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ProductPage } from "./pages/productPage/ProductPage";
import { Login } from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:pageNumber" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
