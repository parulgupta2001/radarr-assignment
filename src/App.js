import "./App.css";
import { LandingPage, ProductPage, Login } from "./pages/index";
import { Navbar } from "./components/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:pageNumber" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
