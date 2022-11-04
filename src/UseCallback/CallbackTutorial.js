import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

//diferente do useMemo, nos armazenamos a função, então usamos o useCallBack sempre pra mesma situação.
//se sabemos que a função sempre vai se comportar da mesma maneira, usar o useCallBack
export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback( (name) => { 
      return data + name;
    }, [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
