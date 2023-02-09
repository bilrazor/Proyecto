import BASE_URL from "../../../Enviroment";
import axios from "axios";


const TopBar =(props)=>{

    const doLogout = () => {
        sendLogoutRequest();
        localStorage.removeItem("idpersona");
        localStorage.removeItem("sessionToken");

        props.setLoggedIn(false);
    };

    const sendLogoutRequest = () => {

        const idpersona=localStorege.getItem(idpersona);
        const sessionToken = localStorage.getItem(sessionToken);

        if (idpersona != null && sessionToken != null) {

            axios.delete(BASE_URL+"login/${idpersona}",{
                headers:{"sessionToken":sessionToken}
            });
        }
    };


    return (
        <div>topbar</div>
    );
}


export default TopBar;