import { useState, useEffect, createContext, useContext, useRef, useReducer, useCallback, useMemo } from 'react'
import { createRoot } from 'react-dom/client'

const UserContext = createContext();

function countReducer(state, action) {
  if (action.type === 'INCREMENT') {
    return { count: state.count + 1 };
  }
  return state;
}

function HooksDemo() {
  const [color, setColor] = useState("red");

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const user = useContext(UserContext);

  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  const resetColor = useCallback(() => {
    setColor("red");
  }, []);

  const doubleCount = useMemo(() => {
    return state.count * 2;
  }, [state.count]);

  return (
    <div>
      <h1>W3Schools React Hooks</h1>
      <p><b>useContext:</b> Hello {user}!</p>

      <p><b>useState & useCallback:</b> My favorite color is {color}!</p>
      <button type="button" onClick={() => setColor("blue")}>Blue</button>
      <button type="button" onClick={resetColor}>Reset to Red</button>

      <p><b>useEffect:</b> Timer active for {seconds} second(s).</p>
      <p><b>useRef:</b> Component Render Count: {renderCount.current}</p>

      <p><b>useReducer & useMemo:</b> Count is {state.count} (Doubled: {doubleCount})</p>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>Add Count</button>
    </div>
  );
}

function App() {
  return (
    <UserContext.Provider value="Jesse Hall">
      <HooksDemo />
    </UserContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);