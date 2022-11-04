import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

// useEffect, quando não é passado o segundo parametro, nem array, o useEffect irá rodar sempre que acontecer alguma mudança de estado.
// com o array, irá ser chamado apenas uma vez quando o componente é carregado.
// ou quando queremos ouvir a mudança de estado de algo
function EffectTutorial() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Sou chamado em toda mudança de estado!')
  })
  
  useEffect(() => {
    console.log('Sou chamado apenas quando o componente é carregado!')
  },[])
  
  useEffect(() => {
    console.log('Sou chamado sempre que muda o estado de count!')
  },[count])
  
  const handleClick = useCallback( () => {
    console.log('clicou callback')
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {     
      setData();
      console.log("API WAS CALLED");
    });
  },[data])
  

  useEffect(() => {
   
  }, []);
  console.log('data:')
  console.log(data)
  return (
    <div>
      Bem vindo
      
      <h1>Data: {Object.keys(data).length > 0 ? data.data[0].email : ''} </h1>
      <h1>Valor: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <button
        onClick={() => handleClick() }
      >
        Click useCallback
      </button>
    </div>
  );
}

export default EffectTutorial;
