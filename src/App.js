import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario/';
import Time from './components/Time';


function App() {
  
  const[colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)

    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado}/>
      <Time nome="Programação"/>
      <Time nome="FrontEnd"/>
      <Time nome="Data Science"/>
      <Time nome="Devops"/>
      <Time nome="UX e Design"/>
      <Time nome="Mobile"/>
      <Time nome="Inovação e Gestão"/>
    </div>
  );
}

export default App;
