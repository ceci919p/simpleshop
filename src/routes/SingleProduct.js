/* import styles from "../App.module.css"; */
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const params = useParams();
  console.log(params);

  /*import useffect
  fetch the product 
  myapi.dk/products/${params.id}*/

  return <h1>SingleProduct</h1>;
}
