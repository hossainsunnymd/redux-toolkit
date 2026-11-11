import { useSelector,useDispatch } from "react-redux";
import { increment, decrement } from "./features/counters/countersSlice";

const App = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(increment(1))}>Increment1</button>
      <button onClick={()=>dispatch(decrement(1))}>decrement1</button>

      <button onClick={()=>dispatch(increment(2))}>Increment2</button>
      <button onClick={()=>dispatch(decrement(2))}>decrement2</button>


      <div>
        <h2>Count 1:{counters[0].count} </h2>
        <h2>Count 2: {counters[1].count}</h2>
      </div>
    </div>
  );
};

export default App;
