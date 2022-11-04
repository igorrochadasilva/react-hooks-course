import React, { forwardRef, useImperativeHandle, useState } from "react";

//o useImperativeHandle permite que voce crie certas funções que se vc passar uma referencia,
// ele podera ser chamado de um componente pai

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      console.log('UseInterativeHandle')
      console.log(ref)
      setToggle(!toggle);
    },
  }));
  return (
    <>
      <button onClick={e => console.log(e)}>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
