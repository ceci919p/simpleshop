import { Link } from "react-router-dom";

export default function Product(props) {
  function buy() {
    if (props.basket.find((item) => item.id === props.product.id)) {
      console.log("in basket already");

      props.setBasket((old) =>
        old.map((item) => {
          if (item.id === props.product.id) {
            const copy = { ...item };
            copy.amount++;
            return copy;
          }

          return item;
        })
      );
    } else {
      props.setBasket((oldState) => [
        ...oldState,
        { ...props.product, amount: 1 },
      ]);
    }
  }

  return (
    <article>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`}
        alt=""
      />

      <h2>{props.product.productdisplayname}</h2>

      <p>{props.product.price}</p>
      <button onClick={buy}>Buy</button>
      <Link to={`/products/${props.product.id}`}>Read More</Link>
    </article>
  );
}
