import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from "Frontend/generated/com/example/application/data/App";
const AppsPortal: React.FC<{  }> = () => {
    const [aplicaciones, setAplicaciones] = useState<App[]>([]);
    const username = localStorage.getItem('username');

    useEffect(() => {
        const fetchUserApplications = async () => {
            try {
                const response = await axios.get(`/api/usuarios/${username}/aplicacionesPortal`);
                setAplicaciones(response.data);

            } catch (error) {
                console.error('Error trayendo info de Apps:', error);
            }
        };
        fetchUserApplications();
    }, [username]);
    const handleClick = () => {
        alert('En Construccion');
        // Puedes realizar otras acciones aquí
    };
    return (
        <div className={'container'} >
         <div className={'row'}>
            {aplicaciones.map((app) => (
                <div className={'col-sm-4'}>
                <div className={'card tarjetaPortal'} key={app.id}>
                    <div className={'card-header justify-content-center'}>
                        {app.nombre}
                    </div>
                    <div className={'card-body'}>
                        <button onClick={handleClick} className={'btn btn-primary block'}>Ingresar</button>
                    </div>

                </div>
                </div>
            ))}
         </div>
        </div>
    );
}
export default AppsPortal;