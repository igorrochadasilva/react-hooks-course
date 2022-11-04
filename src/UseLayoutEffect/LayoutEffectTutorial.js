import { useLayoutEffect, useEffect, useRef } from "react";


//enquanto o useEffect é chamado dps da construção do componente
// o useLayoutEffect é chamado sincronamente com a construção do componente
// muito utilizado para alterar layout antes de finalizar sua construção
function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log('Use layout effect chamado!')
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    console.log('Use effect chamado!')
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} defaultValue="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
