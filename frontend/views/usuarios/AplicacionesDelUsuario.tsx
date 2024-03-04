import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from "Frontend/generated/com/example/application/data/App";
const AplicacionesDelUsuario: React.FC<{ userId: number }> = ({ userId }) => {
    const [aplicaciones, setAplicaciones] = useState<App[]>([]);
    const [noAplicaciones, setNoAplicaciones] = useState<App[]>([]);

    useEffect(() => {
        const fetchUserApplications = async () => {
            try {
                const response = await axios.get(`/api/usuarios/${userId}/aplicaciones`);
                setAplicaciones(response.data);

                const responseLasQueNoTiene = await axios.get(`/api/usuarios/${userId}/noAplicaciones`);
                setNoAplicaciones(responseLasQueNoTiene.data);

            } catch (error) {
                console.error('Error trayendo info de Apps:', error);
            }
        };
        fetchUserApplications();
    }, [userId]);

    const handleVincular = async (appId: number) => {
        const confirmlink = window.confirm('¿Confirma Vinculacion?');
        if (confirmlink) {
            try {
                await axios.post(`/api/usuarios/${userId}/apps/${appId}`);

                const responseLasQueNoTiene = await axios.get(`/api/usuarios/${userId}/noAplicaciones`);
                // Refrescar la lista de aplicaciones no vinculadas después de la operación
                setNoAplicaciones(responseLasQueNoTiene.data);

                const response = await axios.get(`/api/usuarios/${userId}/aplicaciones`);
                // Refrescar la lista de aplicaciones vinculadas después de la operación
                setAplicaciones(response.data);


            } catch (error) {
                console.error('Error linking application:', error);
            }
        }
    };

    const handleDesvincular = async (appId: number) => {
        const confirmUnlink = window.confirm('¿Confirma Desvinculacion?');
        if (confirmUnlink) {
            try {
                await axios.post(`/api/usuarios/${userId}/apps/${appId}/desvincular`);

                const responseLasQueNoTiene = await axios.get(`/api/usuarios/${userId}/noAplicaciones`);
                // Refrescar la lista de aplicaciones no vinculadas después de la operación
                setNoAplicaciones(responseLasQueNoTiene.data);

                const response = await axios.get(`/api/usuarios/${userId}/aplicaciones`);
                // Refrescar la lista de aplicaciones vinculadas después de la operación
                setAplicaciones(response.data);


            } catch (error) {
                console.error('Error linking application:', error);
            }
        }
    };

    return (
        <div >
            <table className={'table table-dark table-striped'} >
                <thead>
                <tr aria-colspan={3}>
                    <td colSpan={2}>APPS VINCULADAS</td>
                </tr>

                </thead>
                <tbody>
                {aplicaciones.map((app) => (
                    <tr key={app.id}>
                        <td>{app.nombre}</td>
                        <td>
                            <button className={'btn btn-danger'} onClick={() => handleDesvincular(app.id)}>Desvincular</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <table className={'table table-dark table-striped'}>
                    <thead>
                    <tr aria-colspan={3}>
                        <td colSpan={2}>APPS NO VINCULADAS</td>
                    </tr>

                    </thead>
                    <tbody>
                    {noAplicaciones.map(app => (
                        <tr key={app.id}>
                            <td>{app.nombre}</td>
                            <td>
                                <button className={'btn btn-primary'} onClick={() => handleVincular(app.id)}>Vincular</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
        </div>
);
}
export default AplicacionesDelUsuario;
