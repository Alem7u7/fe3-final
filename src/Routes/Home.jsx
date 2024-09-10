import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../Components/Card'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Home = () => {
//----------------Consulta a la API---------------
  const url = "https://jsonplaceholder.typicode.com/users"; 
  const [datos, setDatos] = useState([]);
  
  useEffect(()=>{
      axios(url).then((res)=>{
          console.log(res);
          setDatos(res.data);
      })
  },[]);
  
//-------------------------------------------------
//----------------Render de card-------------------

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>

        {datos.map((dato) => (
          <Card  name={dato.name} username={dato.username} id={dato.id} />
        ))}

      </div>
    </main>
  )
//-------------------------------------------------

}

export default Home