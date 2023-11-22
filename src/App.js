import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductList from "./ProductList";
import Product from "./Product";
import NewProduct from "./NewProduct";
import Welcome from "./Welcome";
import About from "./About";
import "./Footer.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Welcome />} />
            <Route path="products/:productId/edit" element={<NewProduct />} />
            <Route path="products/:productId" element={<Product />} />
            <Route path="products" element={<ProductList />}>
              <Route index element={<p>Select a product for more details</p>} />
            </Route>
            <Route path="new" element={<NewProduct />} />
            <Route path="/aboutus" element={<About />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <div className="footer">
        Deus Vult <br />
        Website designed by: Joseph V. Miloscia
      </div>
    </>
  );
}

export default App;
