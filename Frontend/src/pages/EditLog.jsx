import { useState, useEffect, useNavigate } from "react";
import { useLocation } from "react-router-dom";

export default function EditLog() {
  const location = useLocation();
  console.log(location.state);
  const [newProperty, setNewProperty] = useState({
    homeNumber: location.state.address.homeNumber,
    street: location.state.address.street,
    city: location.state.address.city,
    state: location.state.address.state,
    zip: location.state.address.zip,
    yearBuilt: location.state.yearBuilt,
    bedrooms: location.state.bedrooms,
    bathrooms: location.state.bathrooms,
    squareFeet: location.state.squareFeet,
    garageCarCount: location.state.garageCarCount,
    propertyType: location.state.propertyType,
  });

  const setParam = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    setNewProperty((newProperty) => ({
      ...newProperty,
      [name]: value,
    }));
  };

  async function tryToCreate(e) {
    e.preventDefault();
    fetch(`/log/${location.state._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProperty),
    })
      .then((res) => {
        console.log(res);
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
        The form below is a way for you to add a new newProperty
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
                defaultValue={newProperty.homeNumber}
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
                defaultValue={newProperty.street}
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
                defaultValue={newProperty.city}
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
                defaultValue={newProperty.state}
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
                defaultValue={newProperty.zip}
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
                defaultValue={newProperty.yearBuilt}
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
                defaultValue={newProperty.bedrooms}
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
                defaultValue={newProperty.bathrooms}
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
                defaultValue={newProperty.squareFeet}
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
                defaultValue={newProperty.garageCarCount}
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
                Save
              </button>
            </fieldset>
          </form>
        </article>
      </section>
    </>
  );
}
