import React, { useState } from "react";
import DatosPersonalesform from "../components/datos_personales/DatosPersonales";
import VideosProfileform from "../components/videos_profile/VideosProfile";

const UserProfile = () =>{
    const [formType, setFormType] = useState("DatosPersonales");
    return (
        <div>
            <div> 
                <button onClick={() => setFormType("DatosPersonales")}>Datos Personales</button>
                <button onClick={() => setFormType("VideosProfile")}>Videos</button>
            
                {formType === "DatosPersonales" ? <DatosPersonalesform /> : <VideosProfileform />}
            </div>
        </div>
    );
}

export default UserProfile;