import '../Estilos/ListarProductos.css';
import VerProducto from './VerProducto';

export default function ListarProductos(){
    let articulos=JSON.parse(localStorage.getItem("productos"));
   
    return (
    <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Referencia</th>
              <th>Stock</th>
              <th>Precio</th>
              <th>Seleccionar</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map(art => {
                return (
                  <tr key={art.id}>
                    <td>
                      {art.id}
                    </td>
                    <td>
                      {art.producto}
                    </td>
                    <td>
                      <div>
                        <img src={art.foto}/>
                      </div>
                    </td>
                    <td>
                      {art.stock}
                    </td>
                    <td>
                      {art.precio}
                    </td>
                    <td>
                    <button
                      type="button"
                      onClick={(e) => {
                        localStorage.setItem("id",art.id); 
                        e.preventDefault();
                        window.location.href='VerProducto';
                        }}
                    > Agregar a Carrito
                      </button>
                    </td>
                  </tr>
                )
          })}
          </tbody>
        </table>
    </div>
    );
    
}