
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, isLoggedButton } from './actions';

function App() {
  const counter = useSelector(state => state.count)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Danh Phuong dzai</h3> : <h3>Danh Phuong cao 1m86</h3>}
      <button onClick={() => dispatch(isLoggedButton())}>Change text</button>
    </div>
  );
}

export default App;
