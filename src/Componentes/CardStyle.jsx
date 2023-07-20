export const CardStyle = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((characters, index) => (
        <div key={index} className="col">
          <div
            className="card bg-info-subtle mb-3"
            style={{ maxWidth: "250px" }}
          >
            <img src={characters.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{characters.name}</h5>
              <hr />
              <p>Especies:{characters.species}</p>
              <p>Estado: {characters.status}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

//=[] con los corchetes denoto que es un array
