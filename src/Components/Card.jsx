import React from "react";
import {Link} from "react-router-dom";

const Card = ({name, username,id}) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
      <div className="card">
        <Link to={'/dentist/'+id}><h3>{name}</h3></Link>
        <p>{username}</p>
        <p>ID: {id}</p>
        <button onClick={addFav} className="favButton">Add fav</button>


        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      </div>
  );
};

export default Card;
