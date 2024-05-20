import { useCounter } from "../Hooks/useCounter";

export const CounterWithCustomHook = ( ) => {

const { counter, increment, decrement,Reset  } = useCounter();


  return (
    <>
      <h1> Counter With Custom Hook:{ counter }</h1>
      <hr />
      <button onClick={ ()=>increment( 2 ) } className="btn btn-primary">+1</button>
      <button onClick={ Reset }className="btn btn-primary">Reset</button>
      <button onClick={ ()=>decrement( 2 ) }className="btn btn-primary">-1</button>
    </>
  );
};
