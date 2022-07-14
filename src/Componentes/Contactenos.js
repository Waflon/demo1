export default function Contactenos(){
    return (
        <div class="container">
            <h1 class="mb-3">Contáctenos</h1>
            <form>
                <div class="mb-3">
                    <label for="idNombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="idText" required />
                </div>

                <div class="mb-3">
                    <label for="idEmail" class="form-label">E-mail</label>
                    <input type="email" class="form-control" id="idEmail" required />
                </div>

                <div class="mb-3">
                    <label for="idEdad" class="form-label">Edad</label>
                    <input type="number" class="form-control" id="idEdad" />
                </div>

                <div class="mb-3">
                    <label for="idPass" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="idPass" required />
                </div>
                
                <div class="mb-3">
                    <label for="idCheck1" class="form-label">Fecha Nacimiento</label><br />
                    <input type="date" class="form-date" id="idCheck1" /> 
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
