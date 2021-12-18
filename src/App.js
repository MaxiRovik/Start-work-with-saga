import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const store = useSelector(store => store);
    const dispatch = useDispatch();
    console.log((store))
  return (
    <div className="App">
      Redux-Saga
        <button onClick={() => dispatch({type:"LOAD_DATA"})}>Click me</button>
    </div>
  );
}

export default App;
