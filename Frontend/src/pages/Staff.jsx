import StaffRow from "../components/StaffRow";
import { useState } from "react";

export default function Staff() {
  const [staffArray, setStaffArray] = useState([]);
  const randomPersonEvent = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        setStaffArray(response.results);
      })
      .catch((error) => {
        console.log(error);
        alert("an error occured");
      });
  };

  return (
    <>
      <section>
        <h2>Our Staff</h2>
        <article>
          <p id="staffintro" className="text-center">
            Choose a button to learn about a random staff member
          </p>
          <div id="staffbtns" className="text-center mb-3">
            <button id="browserstaffbtn" onClick={randomPersonEvent}>
              add member
            </button>
          </div>
          <table id="stafftable" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Portrait</th>
                <th>Name/Email</th>
                <th>Telephone</th>
                <th>city</th>
              </tr>
            </thead>
            <tbody id="stafftablebody">
              {staffArray.map((person, i) => (
                <StaffRow person={person} key={i} />
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
}
