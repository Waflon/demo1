
function Menu(){

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Tienda de Gatitos </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="listarProductos">Ver Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="quienesSomos">Quienes somos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contactenos">Contáctenos</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="cerrarSesion">Cerrar Sesión</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="temperatura">Temperatura actual</a>
                    </li>
                    <li class="nav-item" >
                        <a class="nav-link" href="verCarrito">Ver Carrito</a>
                    </li>   
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Menu