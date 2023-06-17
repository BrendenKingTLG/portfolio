import ProductRow from "../components/ProductRow";

export default function Order({ products }) {
  return (
    <>
      <section>
        <h2>Order</h2>
        <article>
          <p id="contactp" className="text-center">
            Make an order
          </p>
          <form action="/order" method="POST" id="orderform">
            <fieldset id="conform" className="d-flex flex-column mb-2">
              <legend>Order Stuff</legend>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jack Smith"
                required
                autoFocus
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="jacksmith@hotlook.com"
                pattern="[^ @]+@[^ @]+.[a-z]+"
                required
              />
              <label htmlFor="address">Address</label>
              <textarea
                type="text"
                name="address"
                placeholder="1234 exampull road, okalahoma city, OK 12345"
                required
              ></textarea>
            </fieldset>
            <fieldset id="conform" className="d-flex flex-column mb-2">
              <table id="ordertable">
                <thead>
                  <tr>
                    <th>Product/Company</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <ProductRow product={product} key={index} />
                  ))}
                </tbody>
              </table>
              <label htmlFor="deliveryinstructions">
                Delivery Instructions
              </label>
              <textarea
                type="text"
                name="deliveryinstructions"
                className="mb-3"
              ></textarea>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </article>
      </section>
    </>
  );
}
