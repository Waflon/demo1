export default function VerProducto(){
    let nuevaId =  localStorage.getItem('id');
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
              <th>Cantidad</th>
              <th>Total</th>
              <th>Seleccionar</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map(art => {
                if(art.id === nuevaId){
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
                            <input type="number" min="1" id="cantidad"></input>
                          </td>
                          <td>
                            <input type="number" value={art.precio} id="total"></input>
                          </td>
                          <td>
                          <button
                            type="button"
                            onClick={(e) => {
                                let cantidad = document.getElementById("cantidad").value;
                                let subtotal = document.getElementById("total").value;
                                let total = subtotal * cantidad;
                                
                                let carrito =  JSON.parse(localStorage.getItem('carrito'));
                                let producto = {"id":art.id, "producto":art.producto,"foto":art.foto, "cantidad":cantidad,"total":total};
                                carrito.push(producto);
                                localStorage.setItem("carrito",JSON.stringify(carrito)); 
                                localStorage.setItem("id",art.id); 
                                e.preventDefault();
                                window.location.href='listarProductos';
                            }}>
                            Agregar a Carrito </button>
                          </td>
                        </tr>
                      );
                }
          })}
          </tbody>
        </table>
    </div>
    );
}