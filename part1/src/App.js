
import './App.css';
import Mensaje from './Mensaje';


const Description = () =>{
  return(
    <p>Esta es la app del curso fullstack bootcamp</p>
  )
}

const App = () => {
  const mensaje = 'Hola'
  const a = 3
  const b = 2
  return (
    /*Con Fragment se puede envolver tu return para evitar estar creando un elemento HTML para envolver tu return
    <>
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso '/>
      <Mensaje color='yellow' message='De React'/>
      <Description />
    </>
    */
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='green' message='En un curso '/>
      <Mensaje color='yellow' message='De React'/>
      <Description />
    </div>
  );
}

export default App;
