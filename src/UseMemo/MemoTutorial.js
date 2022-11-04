import axios from "axios";
import { useEffect, useState, useMemo } from "react";

//com o useMemo, iremos chamar a função apenas quando os dados mudarem, caso não, pegamos o resultado já guardado.
export default function MemoTutorial() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log('iniciando requisição.')
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);              
      });
  }, []);

  const findLongestName = (comments) => {
    console.log('Iniciando FindLongestName')
    if (!comments) return null;

    let longestName = "";
    
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [toggle]);
  
  return (
    <div className="App">
      <div> {getLongestName} </div>

      <button
        onClick={() => {        
          setToggle(!toggle);
          console.log(toggle)
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
