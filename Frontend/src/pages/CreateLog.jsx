import { useState, useEffect, useNavigate } from "react";

export default function CreateLog({}) {
  const [property, setProperty] = useState({
    homeNumber: "1234",
    street: "example road",
    city: "example city",
    state: "example state",
    zip: "12345",
    yearBuilt: "2023",
    bedrooms: "3",
    bathrooms: "3",
    squareFeet: "2500",
    garageCarCount: "2",
    propertyType: "single-family",
  });

  const setParam = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setProperty((property) => ({
      ...property,
      [name]: value,
    }));
  };

  async function tryToCreate(e) {
    e.preventDefault();
    fetch("/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property),
    })
      .then((res) => {
        if (res.status === 201) {
          alert("success");
        } else {
          alert("attempt failed");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <>
      <h2 className="text-center">Add Property</h2>
      <p className="text-center" id="contactp">
        The form below is a way for you to add a new property
      </p>
      <section>
        <article>
          <form>
            <fieldset id="conform" className="d-flex flex-column">
              <label htmlFor="homeNumber" type="string">
                homeNumber
              </label>
              <input
                type="text"
                name="homeNumber"
                defaultValue={property.homeNumber}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />
              <label htmlFor="street" type="string">
                street
              </label>
              <input
                type="text"
                name="street"
                defaultValue={property.street}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />{" "}
              <label htmlFor="city" type="string">
                city
              </label>
              <input
                type="text"
                name="city"
                defaultValue={property.city}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />{" "}
              <label htmlFor="state" type="string">
                state
              </label>
              <input
                type="text"
                name="state"
                defaultValue={property.state}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />
              <label htmlFor="zip" type="string">
                zip{" "}
              </label>
              <input
                type="text"
                name="zip"
                defaultValue={property.zip}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />{" "}
              <label htmlFor="yearBuilt" type="string">
                yearBuilt{" "}
              </label>
              <input
                type="text"
                name="yearBuilt"
                defaultValue={property.yearBuilt}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />{" "}
              <label htmlFor="bedrooms" type="string">
                bedrooms{" "}
              </label>
              <input
                type="text"
                name="bedrooms"
                defaultValue={property.bedrooms}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />{" "}
              <label htmlFor="bathrooms" type="string">
                bathrooms{" "}
              </label>
              <input
                type="text"
                name="bathrooms"
                defaultValue={property.bathrooms}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />{" "}
              <label htmlFor="sqft" type="string">
                sqft{" "}
              </label>
              <input
                type="text"
                name="sqft"
                defaultValue={property.squareFeet}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />
              <label htmlFor="garageCarCount" type="string">
                garageCarCount{" "}
              </label>
              <input
                type="text"
                name="garageCarCount"
                defaultValue={property.garageCarCount}
                required
                autoFocus
                onChange={(e) => setParam(e)}
              />
              <label htmlFor="propertyType">
                <input
                  type="radio"
                  name="propertyType"
                  id="yes"
                  checked="checked"
                  onChange={(e) => setParam(e)}
                />
                single-family
              </label>
              <label htmlFor="job">
                <input
                  type="radio"
                  name="propertyType"
                  id="no"
                  onChange={(e) => setParam(e)}
                />
                multi-family
              </label>
              <button type="submit" onClick={(e) => tryToCreate(e)}>
                Submit
              </button>
            </fieldset>
          </form>
        </article>
      </section>
    </>
  );
}
