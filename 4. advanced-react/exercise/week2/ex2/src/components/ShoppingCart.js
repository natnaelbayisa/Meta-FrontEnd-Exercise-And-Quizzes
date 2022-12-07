import { useEffect } from "react";

function ShoppingCart(props) {
  const total = props.count * props.price;

  // both useEffect types do the same thing

  /*
  useEffect(function () {
    console.log(total);
  }, []);
  */

  useEffect(() => console.log(total), []);

  return (
    <div>
      <h1>This is calculation passed through useEffect hook</h1>
      <h1>Total: {total}</h1>;
    </div>
  );
}

export default ShoppingCart;
