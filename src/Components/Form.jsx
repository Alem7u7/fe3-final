import React, { useState } from 'react';


const Form = () => {
  
    const [nombre, setName] = useState("");
    const [correo, setCorreo] = useState("");
    const [error, setError] = useState("");
    const [datos, setDatos] = useState({ nombre: "", especie: "" });
    const [flag, setFlag] = useState(false);
    
    const input1Regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{6,}$/;
    const input2Regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
    
        if (!input1Regex.test(nombre) || !input2Regex.test(correo) ) {
          setError("Por favor verifique su información nuevamente");
          return;
        } else{
            console.log("Formulario enviado con éxito");
            setFlag(true);
        } 
        setDatos({ nombre, correo });
        setName("");
        setCorreo("");
      };


      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Nombre completo:</label>
            <input type="text" value={nombre} onChange={(e) => setName(e.target.value)}/>
            <label>Correo electronico:</label>
            <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)}/>
            {error && <p style={{color: "red"}}>{error}</p>}
            <button type="submit">Enviar</button>
          </form>
          {flag ? <h2>Gracias {nombre}, te contactaremos cuando antes vía mail</h2>: null}
        </div>
      );
};

export default Form;
