import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state,count: state.count + 1, showText: state.showText};
    case "toggleShowText":
      return { ...state,count: state.count, showText: !state.showText };
    case "ChangeText":
      return {...state, text: "Mudamoss apenas o texto do objeto do estado"}
    default:
      return state;
  }
};

// com o Reducer, podemos criar um objeto ao qual irá guardar oque quisermos, e ai podemos
// criar o reducer e criar eventos que irão mudar os parametros desse objeto
const ReducerTutorial = () => {
  
  const reducerStates =  { 
    count: 0,
    showText: true,
    text: 'Ola, aqui temos um objeto que usamos para alterar seus valores com o dispatch do recuder'
  }

  const [state, dispatch] = useReducer(reducer, reducerStates);

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
          dispatch({type: "ChangeText"})
          console.log(state)
        }}
      >
        Click Here
      </button>
      
      <button
        onClick={() => {
          dispatch({type: "ChangeText"})
          console.log(state)
        }}
      >
      Mudar texto     
      </button>
      

      {state.showText && <p>This is a text</p>}
      {state.text}
    </div>
  );
};

export default ReducerTutorial;
