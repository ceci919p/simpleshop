import { Link, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Products from "./routes/Products";
import SingleProduct from "./routes/SingleProduct";
import BasketContainer from "./components/BasketContainer";
import { BasketProvider } from "./contexts/basket";
import styles from "./App.module.css";

export default function App() {
  return (
    <div id="app" className={styles.App}>
      <header>
        <h1>My great shop</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/products">Products</Link>
        </nav>
      </header>

      <BasketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
        <BasketContainer />;
      </BasketProvider>
    </div>
  );
}
