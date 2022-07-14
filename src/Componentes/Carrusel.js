import imagen1 from '../imagenes/foto1.jpg';
import imagen2 from '../imagenes/foto2.jpg';
import imagen3 from '../imagenes/foto6.jpg';
import imagen4 from '../imagenes/foto4.jpg';
import imagen5 from '../imagenes/foto5.jpg';
import '../Carrusel.css';

function Carrusel(){
    return (
        <div id="idCarrusel" class="carousel slide" data-bs-ride="carousel">
            <ol class="carousel-indicators">
                <li data-bs-target="#idCarrusel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#idCarrusel" data-bs-slide-to="1"></li>
                <li data-bs-target="#idCarrusel" data-bs-slide-to="2"></li>            
                <li data-bs-target="#idCarrusel" data-bs-slide-to="3"></li>
                <li data-bs-target="#idCarrusel" data-bs-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={imagen1} alt="foto1"/>
                </div>
                <div class="carousel-item">
                    <img src={imagen2} alt="foto2"/>
                </div>
                <div class="carousel-item">
                    <img src={imagen3} alt="foto3"/>
                </div>
                <div class="carousel-item">
                    <img src={imagen4} alt="foto4"/>
                </div>
                <div class="carousel-item">
                    <img src={imagen5} alt="foto5"/>
                </div>
            </div>
      </div>
    );
}

export default Carrusel;