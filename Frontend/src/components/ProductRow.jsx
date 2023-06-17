import ProductQuantity from "./ProductQuantity";

export default function ProductRow({ product }) {
  return (
    <>
      <tr>
        <td>
          <p>{`${product.product} "from" ${product.company}`}</p>
        </td>
        <td>{product.price.toLocaleString()}</td>
        <td className="text-center">
          <ProductQuantity />
        </td>
      </tr>
    </>
  );
}
