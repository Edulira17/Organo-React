import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const backgroundDinamic = { backgroundColor: props.corSecundaria };

  return (
    // Renderização Condicional 
    (props.colaboradores.length > 0) ? <section className="time" style={backgroundDinamic}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
      {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
      </div>
    </section>
    : ''
  )
}

export default Time;
