import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Card/CardDetails";
import "./App.css";

import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import Welcome from "./Pages/Welcome";
import Logout from "./Pages/Logout";
import Default from "./Pages/Default";
import Nosotros from "./Pages/Nosotros";


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Welcome/>} />
        <Route path="/default" element={<Default />} />
          <Route path="/:id" element={<CardDetails />} />
        {isAuthenticated && (
        <Route path="/episodes" element={<Episodes />} />
        )}
        <Route path="/episodes/:id" element={<CardDetails />} />
        {isAuthenticated && (
        <Route path="/location" element={<Location />} />
        )}
        <Route path="/location/:id" element={<CardDetails />} />

        {isAuthenticated && <Route path="/nosotros" element={<Nosotros />} />}

          <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
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

export default App;
