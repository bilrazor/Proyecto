import React, { useState, useEffect } from "react";
import BASE_URL from "../../Enviroment";
import "./UserLogin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserLogin = () => {
    const navigate = useNavigate();
    //creo el formData para depositar los datos
    const [formData,setFormData] =useState({
        nickName:'',
        email:'',
        password:'',
    });

    const onSubmit = (e) =>{
        e.preventDefault()

        axios.post(BASE_URL+"/login",formData).then((response) => {

        localStorage.setItem("idpersona",response.data.idpersona);
        localStorage.setItem("sessionToken",response.data.sessionToken);
        
        navigate("/");
            
        })


    };

    const onChangeNick =(e) =>{
        setFormData({
            nickName:e.target.value,
            email:formData.email,
            password:formData.password,
        })
    }
    const onChangeEmail =(e) =>{
        setFormData({
            nickName:formData.nickName,
            email:e.target.value,
            password:formData.password,
        })
    }
    const onChangePassword =(e) =>{
        setFormData({
            nickName:formData.nickName,
            email:formData.email,
            password:e.target.value,
        })
    }

    return (
        <div>

            <form onSubmit={onSubmit}>
                <label>Intruzca el nickName</label>
                <input type="text" id="nickName" onChange={onChangeNick}></input>
                <label>el Correo electrónico</label>
                <input type="email" id="email" onChange={onChangeEmail}></input>
                <label>Intruzca la Contraseña</label>
                <input type="password" id="password" onChange={onChangePassword}></input>
                <input type="submit" id="submit" value="Iniciar Sesión"></input>
            </form>
        </div>
    );

}
export default UserLogin;