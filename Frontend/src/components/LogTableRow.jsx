export default function LogTableRow({ property, editIcon, deleteIcon }) {
  return (
    <>
      <tr>
        <td></td>
        <td>{property.purchaseDate.slice(0, 15)}</td>
        <td>{`${property.address.homeNumber} ${property.address.street} ${property.address.city} ${property.address.state} ${property.address.zip} `}</td>
        <td className="text-center">{property.yearBuilt}</td>
        <td className="text-center">{property.bedrooms}</td>
        <td className="text-center">{property.bathrooms}</td>
        <td className="text-center">{property.squareFeet}</td>
        <td className="text-center">{property.garageCarCount}</td>
        <td>{property.propertyType}</td>
        <td className="text-center">{editIcon}</td>
        <td className="text-center">{deleteIcon}</td>
      </tr>
    </>
  );
}
