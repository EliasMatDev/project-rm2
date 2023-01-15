import React from "react";
import "../css/bienvenida.css";
import fondo from "../img/inicio.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Welcome = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    <div className="welcome">
      <div id="effect"></div>
      <header
        className="contenedor header"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        {
        }

        {
        }
        <div className="contenido-descripcion">
          <div>
            <h1 className="titulo">
              <span>🔻</span>
              <span id="pepapig">🟩online!</span>
            </h1>
            {isAuthenticated && (
              <div>
                <img src={user.picture} alt={user.nickname} />
                <h2 id="effect1">Usuario: {user.nickname}</h2>
                <h2 id="effect1">Email: {user.name}</h2>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
