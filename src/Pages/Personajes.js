import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";


const Personajes = () => {
    let [pageNumber, updatePageNumber] = useState(1);
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
    let [fetchedData, updateFetchedData] = useState([]);
    let [search, setSearch] = useState("");
    let { info, results } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json()); // aqui hacemos la peticion a la api
            updateFetchedData(data); // aqui actualizamos el estado con los datos que nos devuelve la api
        })(); // aqui ejecutamos la funcion
    }, [api]); // aqui le decimos que se ejecute cada vez que cambie la variable api
    return ( // aqui retornamos el componente
        <div className="App" id="duvanboy">
            <h1 className="text-center mb-3" id="pepapig2">PERSONAJES</h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <div className="container">
                <div className="row">
                    <Filter
                        pageNumber={pageNumber}
                        status={status}
                        updateStatus={updateStatus}
                        updateGender={updateGender}
                        updateSpecies={updateSpecies}
                        updatePageNumber={updatePageNumber}
                    />
                    <div className="col-lg-8 col-12">
                        <div className="row">
                            <Card page="/" results={results} />
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber}
            />
        </div>
    );
};

export default Personajes;