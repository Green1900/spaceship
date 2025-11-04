
import './App.css';
import SystemStatus from './components/SystemStatus';
import { useState } from 'react';

function App() {

const [counter, setCounter] = useState(0);

function handleClick() {
  setCounter(counter + 1);
}

const [status, setStatus] = useState(true);

function changeCircumstanses() {
  setStatus(!status);
}

console.log(status)

  return (
    <>
      <h1>Панель управления кораблём</h1>
      <p>Система активирована</p>
      <SystemStatus status= "online" name= "Captain" />
      <SystemStatus status= "Offline" />
      <button onClick={handleClick}>Запустить гипердвигатель</button>
      <p>Гипердвигатель запущен {counter} раз</p>
      <button onClick={changeCircumstanses}>Симулировать Ошибку</button>
      <p>{status? "Все штатно" : "Ошибка!"}</p>
    </>
  );
}

export default App;
