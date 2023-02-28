import React, { useState } from "react";
import DatosPersonalesform from "../components/datos_personales/DatosPersonales";
import VideosProfileform from "../components/videos_profile/VideosProfile";
import DietasProfileform from "../components/dietas_profile/DietasProfile";
import InicioProfileform from "../components/inicio_profile/InicioProfile";
import RutinasProfileform from "../components/rutinas_profile/RutinasProfile";

import "./UserProfile.css";
import logo from "./Imagenes/logo5.png";

const UserProfile = () =>{
    const [formType, setFormType] = useState("DatosPersonales");
    return (
        <div>
        <div className="grid-containerP">
           

            <div className="headerP">
                <div className="top">
                    background
                </div>
                <div className="mid">
                    <img src={logo} alt="logo" width="200" height="200"  ></img>
                    <div>
                        <p>billy</p>
                        <p>billy</p>
                    </div>
                    <div>
                        <p>billy</p>
                        <p>billy</p>
                    </div>
                </div>
                <div className="bot">
                    
                    <button onClick={() => setFormType("InicioProfile")}>Inicio</button>
                    <button onClick={() => setFormType("RutinasProfile")}>Rutinas</button>
                    <button onClick={() => setFormType("DietasProfile")}>Dietas</button>
                    <button onClick={() => setFormType("VideosProfile")}>Videos</button>
                    <button onClick={() => setFormType("DatosPersonales")}>Datos Personales</button>
                     
                    
                </div>
                <div className="centerP">
                {formType === "DatosPersonales" ? (
                <DatosPersonalesform />
                    ) : formType === "VideosProfile" ? (
                    <VideosProfileform />
                    ) : formType === "DietasProfile" ? (
                    <DietasProfileform />
                    ) : formType === "RutinasProfile" ? (
                    <RutinasProfileform />
                    ) : (
                    <InicioProfileform />
                )}
                </div>
            </div>
           
        </div>

        </div>
    );
}

export default UserProfile;