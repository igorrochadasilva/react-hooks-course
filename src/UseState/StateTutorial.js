import React, { useState } from "react";


//com o useState, podemos deixar uma variavel inicializada com o valor que desejarmos e mudar ela quando quisermos usando o set
const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");


  return (
    <div>
    <input placeholder="enter something..." onChange={e => setInputValue(e.target.value) } />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
