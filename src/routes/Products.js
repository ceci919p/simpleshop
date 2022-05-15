import { useState, useEffect } from "react";

import ProductList from "../components/ProductList";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default Products;
