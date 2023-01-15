import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import InputGroup from "../components/Filter/category/InputGroup";

const Location = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`; // aqui hacemos la peticion a la api

  useEffect(() => {
    (async function () { // aqui ejecutamos la funcion
      let data = await fetch(api).then((res) => res.json()); // aqui hacemos la peticion a la api
      setInfo(data); // aqui actualizamos el estado con los datos que nos devuelve la api

      let a = await Promise.all( 
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return ( // aqui retornamos el componente
    <div className="container"> 
      <div className="row mb-3">
        <h1 className="text-center mb-3 text-white">
          Localización :
          <span className="text-success">
            {" "}
            {name === "" ? "Unknown" : name}
          </span>
        </h1>
        <h5 className="text-center text-danger">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center text-success">Type: {type === "" ? "Unknown" : type}</h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4 text-warning">Eleguir Localización</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
