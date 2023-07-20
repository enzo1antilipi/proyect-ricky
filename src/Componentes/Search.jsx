export const Search = ({ setBuscar }) => {
  return (
    <>
      <div className="center">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Character"
              aria-label="Search"
              onChange={(evento) => {
                //setpageNumber(1);
                setBuscar(evento.target.value);
              }}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

//el evento onChange nos permite definir acciones a ejecutar cuando algo sucede.Debemos pasarle una funcion a ejecutarse
