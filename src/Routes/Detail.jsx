import { useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 

//-----------Peticion a api-------------

  const params = useParams();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  const [datos, setDatos] = useState([]);

  useEffect(()=>{
        axios(url).then((res)=>{
            console.log(res.data);
            setDatos(res.data);
        })
    },[]);
  
//--------------------------------------
//------Renderizado de informacion------

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{params.id}</h2>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{datos.name}</td>
            <td>{datos.email}</td>
            <td>{datos.phone}</td>
            <td>{datos.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
//--------------------------------------  
}

export default Detail