import { Search } from "./Search";

export const Navbar = ({ setBuscar }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand">Ricky and Morty</a>
          <Search setBuscar={setBuscar} />
        </div>
      </nav>
    </>
  );
};
