export default function Product(props) {
  function buy() {
    props.setBasket((oldState) => [...oldState, props.product]);
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
    </article>
  );
}
