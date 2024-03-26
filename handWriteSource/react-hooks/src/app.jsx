import { useState, useEffect, root, useReducer, useRef } from "./react";

root.render(<App />);

function reducer(state, action) {
  if (action?.type === "add") {
    return state + 1;
  }
  if (action?.type === "dec") {
    return state - 1;
  }
  return state;
}

export default function App() {
  const refValue = useRef(0);
  const refValue2 = useRef(0);
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  useEffect(() => {
    console.log("初始化一次", refValue.current);
  }, []);

  useEffect(() => {
    console.log("effect state", refValue.current);
  }, [state]);

  useEffect(() => {
    setTimeout(() => {
      console.log('闭包： ', value, refValue2.current);
    }, 3000)
  }, [])

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => {
        setValue(refValue2.current = value + 1)}
      }> + 1 </button>
      <h1>{value2}</h1>
      <button onClick={() => setValue2(value2 + 1)}> + 1 </button>
      <h1>{value3}</h1>
      <button onClick={() => setValue3((value3) => value3 + 1)}> + 1 </button>

      <h1>reducer: {state}</h1>
      <button onClick={() => dispatch({ type: "add" })}> + 1 </button>
      <button onClick={() => dispatch({ type: "dec" })}> - 1 </button>
      <button onClick={() => {
        console.log('修改：', refValue.current = state);
      }}>修改ref</button>
      <button onClick={() => {
        console.log('ref: ', refValue.current);
      }}>显示ref</button>
    </div>
  );
}
