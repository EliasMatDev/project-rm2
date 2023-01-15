import React from "react";

const BoxNosotros = ({ url, name, description }) => {
  return (
    <div className="box">
      <figure>
        <img src={url} />
        {
}
      </figure>
      <div className="name">
        <h4>{name}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default BoxNosotros;
