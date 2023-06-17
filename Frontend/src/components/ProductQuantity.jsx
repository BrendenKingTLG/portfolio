import { useState } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);
  const increaser = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  const decreaser = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <AiFillCaretUp onClick={increaser} /> <p>{quantity}</p>
      <AiFillCaretDown onClick={decreaser} />
    </>
  );
}
