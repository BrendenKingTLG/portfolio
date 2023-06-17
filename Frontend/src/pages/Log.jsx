import { useState, useEffect } from "react";
import LogTable from "../components/LogTable";
import { useNavigate } from "react-router-dom";

export default function Log({}) {
  const navigate = useNavigate();
  const [document, setDocument] = useState([]);

  const fetchLogData = async () => {
    fetch("/log")
      .then((response) => response.json())
      .then((response) => {
        setDocument(response);
      })
      .catch((error) => {
        console.log(error);
        alert("an error occured");
      });
  };

  useEffect(() => {
    fetchLogData();
  }, []);

  const updateOneLog = (property) => {
    navigate("/log/edit", { state: property });
  };

  const deleteLog = (property) => {
    console.log(property);
    fetch(`/log/${property["_id"]}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property),
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

    fetchLogData();
  };

  return (
    <>
      <h2 className="text-center">Log of Properties</h2>
      <article>
        <p className="text-center">
          Log of every property a company has purchased
        </p>
        <LogTable
          data={document}
          updateFunc={updateOneLog}
          deleteFunc={deleteLog}
        />
      </article>
    </>
  );
}
