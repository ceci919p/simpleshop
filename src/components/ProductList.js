import Product from "./Product";

export default function ProductList({ products, setBasket, basket }) {
  return (
    <section className="ProductList">
      {products.map((p) => (
        <Product key={p.id} setBasket={setBasket} basket={basket} product={p} />
      ))}
    </section>
  );
}
