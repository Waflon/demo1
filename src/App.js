import './Estilos/App.css';
import Menu from "./Componentes/Menu";
import Carrusel from "./Componentes/Carrusel";
import ListarProductos from './Componentes/ListarProductos';
import QuienesSomos from "./Componentes/QuienesSomos";
import Contactenos from "./Componentes/Contactenos";
import VerProducto from "./Componentes/VerProducto";
import Temp from "./Componentes/Temp";

function App() {

  {/* Determinar la ubicacion segun la URL y mandarla como componente debajo del navBar */}
  let component;
  switch (window.location.pathname){
    case "/":
      component = <Carrusel />
      break;

      case "/listarProductos":
        component = <ListarProductos />;
        break;

      case "/VerProducto":
        component = <VerProducto />;
        break;

    case "/quienesSomos":
      component = <QuienesSomos />;
      break;

    case "/contactenos":
      component = <Contactenos />;
      break;
    case "/temperatura":
      component = <Temp />;
      break;
  }
  return (
    <>
      <Menu />
      {component}
    </>
  );
}
export default App;