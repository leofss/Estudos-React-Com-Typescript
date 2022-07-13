import React from 'react';
//4 - importação de componentes
import FirstComp from './Components/FirstComponent';

//5- desestruturando props
import SecondComp from './Components/SecondComponent';
import Destructuring from './Components/Destructuring';

//6 - Use state
import State from './Components/State';

//8 - enums
import { Category } from './Components/Destructuring';
import { createContext } from 'react';
import Context from './Components/Context';

//9 - context
interface IAppContext{
  lang : string
  framework : string
  projects : number
}

export const AppContext = createContext<IAppContext | null>(null)

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

  //9 - context
  const ContextValue = {
    lang : "Javascript",
    framework : "Express",
    projects : 5,
  };  

  return (
  <AppContext.Provider value={ContextValue}>
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>idade: {age}</p>
      {IsWorking && (
        <p>Está trabalhando</p>
      )}
      <h3>{UserGreeting(name)}</h3>
      
      <FirstComp />
      <SecondComp name = "Segundo"/>
      <Destructuring 
        title='Hello World' 
        content='Amando React' 
        QtdComents={10}
        tags = {["ts", "js"]}
        category = {Category.JS}/>
      <State/>
      <Context />
    </div>
  </AppContext.Provider>
  );
}

export default App;
