export const root = ReactDOM.createRoot(document.getElementById("root"));

let stateIndex = 0;
let stateArr = [];
let setStateArr = [];

let effectIndex = 0;
let effectDepArr = [];

let refIndex = 0;
const refArr = [];

export function render() {
  stateIndex = 0;
  effectIndex = 0;
  refIndex = 0;
  import("./app").then((module) => {
    const App = module.default;
    root.render(<App />);
  });
}

export function useState(initial) {
  const currentIndex = stateIndex;
  const state = stateArr.hasOwnProperty(stateIndex)
    ? stateArr[stateIndex]
    : (stateArr[stateIndex] = initial);

  const setState = setStateArr.hasOwnProperty(stateIndex)
    ? setStateArr[stateIndex]
    : (setStateArr[stateIndex] = (newState) => {
        const currentState = stateArr[currentIndex];
        const targetState =
          typeof newState === "function" ? newState(currentState) : newState;
        if (currentState === targetState) return;
        stateArr[currentIndex] = targetState;
        render();
      });

  stateIndex++;
  return [state, setState];
}

export function useRef(initial) {
  if (!refArr.hasOwnProperty(refIndex)) {
    refArr[refIndex] = {
      current: initial,
    };
  }

  return refArr[refIndex++];
}

export function useEffect(cb, depArr) {
  if (!Array.isArray(depArr)) {
    cb();
    return;
  }

  if (!effectDepArr.hasOwnProperty(effectIndex)) {
    cb();
    effectDepArr[effectIndex] = depArr;
    effectIndex++;
    return;
  }

  if (
    effectDepArr[effectIndex].length &&
    depArr.some((x, index) => x !== effectDepArr[effectIndex][index])
  ) {
    effectDepArr[effectIndex] = depArr;
    cb();
  }
  effectIndex++;
}

export function useReducer(reducer, initial) {
  const [state, setState] = useState(initial);

  function dispatch(action) {
    setState(reducer(state, action));
  }

  return [state, dispatch];
}
