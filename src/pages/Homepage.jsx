import { useEffect, useState } from "react";
import { CardStyle, Navbar, Pagination, Search } from "../Componentes";
import "./Estilo.css";

export const Homepage = () => {
  const [characters, setcharacters] = useState([]);
  const [Info, setInfo] = useState({});
  const [buscar, setBuscar] = useState("");
  console.log(buscar);

  const initialUrl = `https://rickandmortyapi.com/api/character/?name=${buscar}`;

  const getData = async (url) => {
    //const url = initialUrl;
    const resp = await fetch(url);
    const data = await resp.json();

    setcharacters(data.results);
    setInfo(data.info);
    console.log(setcharacters);
  };

  const onPrevious = () => {
    getData(Info.prev); //nota 1
  };

  const onNext = () => {
    getData(Info.next);
    console.log(Info.next);
  };

  useEffect(() => {
    getData(initialUrl);
  }, []);

  useEffect(() => {
    if (buscar !== "") {
      getData(initialUrl);
    }
  }, [buscar]);

  return (
    <>
      <Navbar setBuscar={setBuscar} />
      {
        //hacemos Un if ternario para mostrar un mensaje cuando no hay personajes
        characters == "There is nothing here" ? (
          //mostrar mensaje centrado en la pantalla con boostrap

          <div className="alert alert-info px-5 mt-2 " role="alert">
            <h6>No exite ese personaje</h6>
          </div>
        ) : (
          // <div className="container-characters">
          //   {characters.map((characters, index) => (
          //     <div className="character-container" key={index}>
          //       <div>
          //         <img src={characters.image} alt={characters.name} />
          //       </div>
          //       <div>
          //         <h3>{characters.name}</h3>
          //       </div>
          //     </div>
          //   ))}
          // </div>
          <div className="contenedor">
            <div className="bg-dark bg-gradient">
              <div className="container mt-5">
                <Pagination //nota 2
                  prev={Info.prev}
                  next={Info.next}
                  onPrevious={onPrevious}
                  onNext={onNext}
                />
                <CardStyle characters={characters} />
                <Pagination
                  prev={Info.prev}
                  next={Info.next}
                  onPrevious={onPrevious}
                  onNext={onNext}
                />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

//nota 1 :Con esto lo que hago es asignarle a la variable onPrevious el url que tengo en la api en este caso
//info.text es el url de la siguiente pagina (esto lo trae de la API)

//useEffect: lo usamos para disparar la funcionn getData hace el fetch en la api, por que lo usamos ? por que de
// esta manera nos aseguramos de que sea de una manera controlada, que la funcion del fetch se ejecute una sola vez
// y no entre en un bucle. En este caso no pero tambien podriamos estar al tanto de la modificacion de los estados
// de react y de acuerdo a ello disparamos el efecto que deseamos

//  Nota 2: Esto que estoy haciendo es pasarle los paramatros con los que va a trabajar la funcion en este caso es
//  pagination
