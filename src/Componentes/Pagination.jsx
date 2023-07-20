export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const HandleNext = () => {
    onNext();
  };
  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={HandleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

//button: traducido al lenguaje coloquial toco el boton y llamo la funcion que me a su vez me tira a l pagina siguiente
