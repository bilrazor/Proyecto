

const DatosPersonales = () =>{
    return(<div>
         <form> 
                <div>
                    <label>nickName:</label>
                    <input type="text" id="nickName" name="nickName" ></input>
                    <label>Nombre:</label>
                    <input type="text" id="nombre" name="nombre" ></input>
                    <label>apellido:</label>
                    <input type="text" id="apellido" name="apellido" ></input>
                </div>
                <div> 
                <label>Correo electrónico:</label>
                <input type="email" id="email" name="email" ></input>
                <label>password:</label>
                <input type="password" id="password" name="password" ></input>
                <label>Confirmar Password:</label>
                <input type="password" id="password" name="password" ></input><br></br>
                <input type="submit" value="registrarse"></input>
                </div>
            </form>
    </div>);
}

export default DatosPersonales;