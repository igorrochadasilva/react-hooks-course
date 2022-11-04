import React, { useRef } from "react";

//com o useRef, referenciamos um elemento do DOM ao qual queremos manipular
function RefTutorial() {
  const inputRef = useRef(null);

  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={() => (console.log(inputRef),inputRef.current.value = 'Pitanga')}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
