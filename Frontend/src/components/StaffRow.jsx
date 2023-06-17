export default function StaffRow({ person }) {
  console.log({ person });
  return (
    <>
      <tr>
        <td>
          <img src={person.picture.thumbnail} alt="" />
        </td>
        <td>
          <a href={`mailto:${person.email}`}>
            {person.name.first + "/" + person.email}
          </a>
        </td>
        <td>{person.phone}</td>
        <td>{person.location.city}</td>
      </tr>
    </>
  );
}
