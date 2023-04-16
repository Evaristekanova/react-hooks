import Squares from './components/Squares';
import Input from './components/Input';
import './App.css';
import { useState } from 'react';

function App() {
  const [ colorValue, setColorValue ] = useState('');
  return (
    <div className="App">
      <h1>hello!~</h1>
      <Squares colorValue={colorValue} />
      <Input colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
