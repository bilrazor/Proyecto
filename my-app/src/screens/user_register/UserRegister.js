import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../Enviroment";


const UserRegister =()=>{
    const [formData,setFormData] = useState ({
        nickName : "",
        nombre:"",
        apellido:"",
        email:"",
        password:"",
        passwordConfirm:"",
    })

    const onChangeNicKName = (e) =>{
        setFormData({
        nickName : e.target.value,
        nombre:formData.nombre,
        apellido:formData.apellido,
        email:formData.email,
        password:formData.password,
        passwordConfirm:formData.passwordConfirm,
        });
    };
    const onChangeNombre = (e) =>{
        setFormData({
        nickName : formData.nickName,
        nombre:e.target.value,
        apellido:formData.apellido,
        email:formData.email,
        password:formData.password,
        passwordConfirm:formData.passwordConfirm,
        });
    };
    const onChangeApellido = (e) =>{
        setFormData({
        nickName : formData.nickName,
        nombre:formData.nombre,
        apellido:e.target.value,
        email:formData.email,
        password:formData.password,
        passwordConfirm:formData.passwordConfirm,
        });
    };
    const onChangeEmail = (e) =>{
        setFormData({
        nickName : formData.nickName,
        nombre:formData.nombre,
        apellido:formData.apellido,
        email:e.target.value,
        password:formData.password,
        passwordConfirm:formData.passwordConfirm,
        });
    };

    const onChangePassword = (e) =>{
        setFormData({
        nickName : formData.nickName,
        nombre:formData.nombre,
        apellido:formData.apellido,
        email:formData.email,
        password:e.target.value,
        passwordConfirm:formData.passwordConfirm,
        });
    };
    const onChangePasswordConfirm = (e) =>{
        setFormData({
        nickName : formData.nickName,
        nombre:formData.nombre,
        apellido:formData.apellido,
        email:formData.email,
        password:formData.password,
        passwordConfirm:e.target.value,
        });
    };

    const onSubmit = (e) =>{
        e.preventDefault();

        axios.post(BASE_URL+"/registro/",formData).then((response) =>{
            console.log(response);
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}> 
                <label>nickName:</label>
                <input type="text" id="nickName" name="nickName" onChangue={onChangeNicKName}></input>
                <label>Nombre:</label>
                <input type="text" id="nombre" name="nombre" onChangue={onChangeNombre}></input>
                <label>apellido:</label>
                <input type="text" id="apellido" name="apellido" onChangue={onChangeApellido}></input>
                <label>Correo electrónico:</label>
                <input type="email" id="email" name="email" onChangue={onChangeEmail}></input>
                <label>password:</label>
                <input type="password" id="password" name="password" onChangue={onChangePassword}></input>
                <label>Confirmar Password:</label>
                <input type="password" id="password" name="password" onChangue={onChangePasswordConfirm}></input>
                <input type="submit" value="registrarse"></input>
            </form>
        </div>
    );
}


export default UserRegister;