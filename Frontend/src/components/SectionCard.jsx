export default function SectionCard({ cardTitle, cardBody }) {
  return (
    <>
      <div
        className="card"
        style={{ marginTop: "1em", marginBottom: "1em", width: "55em" }}
      >
        <div className="card-body">
          <h3 className="card-title text-center">{cardTitle}</h3>
          <p className="card-text">{cardBody}</p>
        </div>
      </div>
    </>
  );
}
