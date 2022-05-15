import { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import BasketContainer from "../components/BasketContainer";

import styles from "../App.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div className={styles.App}>
      <ProductList products={products} basket={basket} setBasket={setBasket} />
      <BasketContainer setBasket={setBasket} basket={basket} />
    </div>
  );
}

export default Products;
