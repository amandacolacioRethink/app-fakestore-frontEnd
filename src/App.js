import "./App.css";
import { Header, Footer } from "./components/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Products, Product } from "./screens/screens";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
