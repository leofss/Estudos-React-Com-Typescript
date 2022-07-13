import React from 'react';
//4 - importação de componentes
import FirstComp from './Components/FirstComponent';

function App() {
  //1 variaveis
  //{} = execução de JS 
  //&& = concatenação com AND

  const name : string = "Leonardo";
  const age : number = 30;
  const IsWorking : boolean = true;

  //2 - funções

  const UserGreeting = (name : string): string =>{
    return `Olá ${name}`
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>idade: {age}</p>
      {IsWorking && (
        <p>Está trabalhando</p>
      )}
      <h3>{UserGreeting(name)}</h3>
      <FirstComp />
    </div>
  );
}

export default App;
