import React from "react";
import BoxNosotros from "../components/BoxNosotros";
import "../css/nosotros.css";

const arrayNosotros = [
  {
    url: "/img/team/team-2.png",
    name: "Nelson Lemus",
    description: "Web Developer",
  },
  {
    url: "/img/team/team-2.png",
    name: "Duvan Gonzalez",
    description: "Web Developer",
  },
  {
    url: "/img/team/team-2.png",
    name: "Jefferson Rodriguez",
    description: "Web Developer",
  },
  {
    url: "/img/team/diegologo.png",
    name: "Diego Martinez",
    description: "Web Developer",
  },
  {
    url: "/img/team/team-2.png",
    name: "Saul Daniel",
    description: "Web Developer",
  },
  {
    url: "/img/team/ronald.png",
    name: "Ronal Perez",
    description: "Web Developer",
  },
  {
    url: "/img/team/team-2.png",
    name: "Carlos Montalvo",
    description:
      "Web Developer",
  },
];
const Nosotros = () => {
  return (
    <div className="containerUs">
      <div className="titulo">
        <h1 id="effect2">DEVELOPERS</h1>
        <p>
        Descubre el increíble mundo de Rick and Morty con nuestro proyecto de consumo de API. Obtén acceso a todos los episodios, personajes y detalles de la serie en un solo lugar.
        </p>
      </div>
      <div className="content">
        {arrayNosotros.map((value, index) => (
          <BoxNosotros
            url={value.url}
            name={value.name}
            description={value.description}
          />
        ))}
      </div>
    </div>
  );
};


export default Nosotros;
