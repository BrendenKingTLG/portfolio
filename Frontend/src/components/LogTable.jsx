import LogTableRow from "./LogTableRow";
import { BsHouseAdd } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function LogTable({ data, updateFunc, deleteFunc }) {
  const navigate = useNavigate();
  return (
    <>
      <table id="stafftable">
        <thead>
          <th>
            <BsHouseAdd onClick={() => navigate("/log/create")} />
          </th>
          <th>Date Added</th>
          <th>Address</th>
          <th>Built</th>
          <th>Beds</th>
          <th>Baths</th>
          <th>SQFT</th>
          <th>G. Car Count</th>
          <th>Property Type</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {data.map((property, i) => (
            <LogTableRow
              property={property}
              key={i}
              editIcon={<AiOutlineEdit onClick={() => updateFunc(property)} />}
              deleteIcon={
                <AiOutlineDelete onClick={() => deleteFunc(property)} />
              }
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
