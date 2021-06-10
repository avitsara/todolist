/*=== MODULES  =========================*/
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ToDo from '../src/components/ToDo';
import AddTask from '../src/components/AddTask';
import Delete from '../src/components/Delete';
import Input from '../src/components/Input';

function App() {
  return (
    <div>
      <ToDo> </ToDo>
      <Input> </Input>

            <AddTask> </AddTask>
            <Delete> </Delete>

    </div>
  );
}

export default App;
