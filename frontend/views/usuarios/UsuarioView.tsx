import React, {useEffect, useState} from "react";
import axios from 'axios';
import {AutoCrud} from "@hilla/react-crud";
import OrganismoRecord from "Frontend/generated/com/example/application/services/OrganismoService/OrganismoRecord";
import UsuarioRecord from "Frontend/generated/com/example/application/services/UsuarioService/UsuarioRecord";
import AppRecord from "Frontend/generated/com/example/application/services/AppService/AppRecord";
import {CRMService, UsuarioService} from "Frontend/generated/endpoints";
import UsuarioModel from "Frontend/generated/com/example/application/data/UsuarioModel";
import ContactRecord from "Frontend/generated/com/example/application/services/CRMService/ContactRecord";
import {Grid} from "@hilla/react-components/Grid";
import {GridColumn} from "@hilla/react-components/GridColumn";
import ContactForm from "Frontend/views/contacts/ContactForm";
import UsuarioForm from "./UsuarioForm";
import {asignarAppAUsuario} from "Frontend/generated/UsuarioService";
import AplicacionesDelUsuario from "Frontend/views/usuarios/AplicacionesDelUsuario";
import { Link } from 'react-router-dom';
import UsuarioNuevoForm from "Frontend/views/usuarios/UsuarioNuevoForm";
import AccesoDenegado from "Frontend/views/AccesoDenegado/AccesoDenegado"; // Importa Link para redireccionamiento

export default function UsuarioView(){
    const [usuarios, setUsuarios] = useState<UsuarioRecord[]>([]);
    const [selected, setSelected] = useState<UsuarioRecord | null | undefined>();
    const [mostrarFormularioNuevoUsr, setMostrarFormularioNuevoUsr] = useState(false);
    const username = localStorage.getItem('username');
    const rol = localStorage.getItem('userrol');
    const [records, setRecords] = useState([]);

    useEffect(() => {
        UsuarioService.findAllUsuarios().then(setUsuarios);
    }, []);

    async function onUsuarioSaved(usuario: UsuarioRecord) {
        const saved = await UsuarioService.save(usuario)
        if (usuario.id) {
            setUsuarios(usuarios => usuarios.map(current => current.id === saved.id ? saved : current));
        } else {
            setUsuarios(usuarios => [...usuarios, saved]);
        }
        setSelected(saved);
        setMostrarFormularioNuevoUsr(false); //hago invisible el form de nuevo usuario
    }
    const handleClick = () => {
        asignarAppAUsuario(1, 2); // Llamar al método con los ID de usuario y rol
    };


    const handleFormSubmit = ( usuario: UsuarioRecord) => {
        // Aquí puedes enviar los datos del cliente al backend
        console.log('Nuevo cliente:', usuario);
    };
    const toggleFormulario = () => {
        setMostrarFormularioNuevoUsr(!mostrarFormularioNuevoUsr); // Invierte el valor actual
    };

    const generarPDFUsuarios = () => {
        axios.get('/api/usuarios/pdf', { responseType: 'blob' })
            .then(response => {
                const file = new Blob([response.data], { type: 'application/pdf' });
                const fileURL = URL.createObjectURL(file);
                window.open(fileURL);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const traerRegistros = async () => {
        try {
            const response = await axios.get('/api/records'); // Endpoint para obtener los registros desde el backend
            setRecords(response.data);
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmUnlink = window.confirm('¿Confirma eliminacion de usuario?');
        const yo=localStorage.getItem('userid');

        if (confirmUnlink) {
            if(yo !== null && parseInt(yo) === id){
                alert('No podes autoeliminarte');
            }
            else {
                try {
                    await axios.delete(`/api/usuarios/eliminar/${id}`); // Endpoint para eliminar el registro con el ID proporcionado
                    // Actualiza la lista de registros después de eliminar
                    setUsuarios(usuarios.filter(usuario => usuario.id !== id));
                } catch (error) {
                    console.error('Error al eliminar el registro:', error);
                }
            }
        }
    };

    return (
        <div>
            {username && (rol === 'ADMIN')  ? (
        <>
            <div>
                <table>
                    <tr>
                        <td>
                            <button className={'btn btn-dark'} onClick={toggleFormulario}>
                                {mostrarFormularioNuevoUsr ? 'Cancelar' : 'Nuevo Usuario'}
                            </button>
                        </td>
                        <td>
                            <button className={'btn btn-dark'} onClick={generarPDFUsuarios}>Reporte Usuarios</button>
                        </td>
                        {selected &&(<td>
                            <button className={'btn btn-danger'} onClick={() => handleDelete(selected?.id)} >Eliminar Usuario</button>
                        </td>)}
                    </tr>
                </table>
                {mostrarFormularioNuevoUsr && <UsuarioNuevoForm usuario={null} onSubmit={onUsuarioSaved}/>}

            </div>
            <div className="p-l flex gap-l">

                <Grid
                    items={usuarios}
                    onActiveItemChanged={e => setSelected(e.detail.value)}
                    selectedItems={[selected]}>
                    <GridColumn path="rol"/>
                    <GridColumn path="nombre"/>
                    <GridColumn path="apellido"/>
                    <GridColumn path="email"/>
                    <GridColumn path="telefono"/>
                    <GridColumn path="tipo"/>

                    <GridColumn path="organismo.nombre" header="Organismo"/>
                </Grid>
                {selected &&
                    <>

                        <AplicacionesDelUsuario userId={selected.id}/>

                    </>
                }


            </div>
            {selected &&
                <>
                    <UsuarioForm usuario={selected} onSubmit={onUsuarioSaved}/><br/>


                </>
            }
        </>
            ) : (<AccesoDenegado/>)}
        </div>
    );
}