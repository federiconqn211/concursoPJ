import { AppLayout } from '@hilla/react-components/AppLayout.js';
import { DrawerToggle } from '@hilla/react-components/DrawerToggle.js';
import Placeholder from 'Frontend/components/placeholder/Placeholder.js';
import { useRouteMetadata } from 'Frontend/util/routing.js';
import React, {Suspense, useEffect, useState} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import LoginForm from "Frontend/views/login/LoginForm";
//import { useUser } from 'Frontend/views/login/UserContext';
//import { UserProvider } from 'Frontend/views/login/UserContext';
import axios from 'axios';
import App from "Frontend/generated/com/example/application/data/App";
import Usuario from "Frontend/generated/com/example/application/data/Usuario";


const navLinkClasses = ({ isActive }: any) => {
    return `block rounded-m p-s ${isActive ? 'bg-primary-10 text-primary' : 'text-body'}`;
};

export default function MainLayout() {
    const currentTitle = useRouteMetadata()?.title ?? 'My App';
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [userrol, setUserRol] = useState('');
    const [apenom, setApeNom] = useState('');
    //const { username, setUsername } = useUser();
    const [usrValidado, setUsrValidado] = useState<Usuario>();



    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        const storedUserRol=localStorage.getItem('userrol');
        const storedApeNom=localStorage.getItem('apenom');
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
            if(storedUserRol) {
                setUserRol(storedUserRol);
            }
            if(storedApeNom) {
                setApeNom(storedApeNom);
            }
        }

    }, []); // Solo se ejecuta una vez al cargar la aplicación

    const handleLogin = async (username: string, password: string) => {
        // Aquí puedes manejar la lógica de inicio de sesión, por ejemplo, enviar los datos al servidor.
        // Por simplicidad, asumiremos que el inicio de sesión es exitoso si el usuario es "admin" y la contraseña es "admin"

        const response = await axios.get(`/api/usuarios/${username}/login/${password}/validar`);

        setUsrValidado(response.data);
        if(usrValidado){
            setIsLoggedIn(true);
            setUsername(username);
            setUserRol(usrValidado.rol);
            setApeNom(usrValidado.apellido + ' ' + usrValidado.nombre);
            localStorage.setItem('username', username);
            localStorage.setItem('userrol', usrValidado.rol);
            localStorage.setItem('apenom', usrValidado.apellido + ' ' + usrValidado.nombre);
            localStorage.setItem('userid', usrValidado.id.toString());
            console.log('iniciaste sesion');
        }
        else
        {
            console.log('Inicio de sesión fallido');
        }
        /*if (username === 'admin' && password === 'admin') {
            {
                //const localStorageItems = { ...localStorage };

                 setIsLoggedIn(true);
                 setUsername(username);
                 setUserRol("ADMIN");
                localStorage.setItem('username', username);
                localStorage.setItem('userrol', 'ADMIN');

               console.log('iniciaste sesion');

            }
        } else {
            console.log('Inicio de sesión fallido');
        }*/
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setUserRol('');
        setApeNom('');
        localStorage.removeItem('username'); // Elimina el nombre de usuario del almacenamiento local al cerrar sesión
        localStorage.removeItem('userrol'); // Elimina el rol de usuario del almacenamiento local al cerrar sesión
        localStorage.removeItem('apenom'); // Elimina el rol de usuario del almacenamiento local al cerrar sesión
        localStorage.removeItem('userid');
        window.location.href = '/';
    };
    return (

        <AppLayout primarySection="drawer">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5+z5vYC5vb25O8k//AXb8jEISbG8v8+IDZhczfL4"
                  crossOrigin="anonymous"/>
            <div slot="drawer" className="flex flex-col justify-between h-full p-m" style={{ backgroundColor: '#000000' }}>
                <header className="flex flex-col gap-m">
                    <img style={{width: '210px'}} src="images/logo jusnqn.png"/>
                    <h1 className="text-l m-0" style={{color: "whitesmoke"}}>Portal del Colaborador</h1>

                    {isLoggedIn ? (
                        <>
                            <em style={{color: '#CCCCCC'}}>{isLoggedIn ? `En linea: ${apenom}` : 'Inicio de Sesión'}</em>
                            <em style={{color: '#CCCCCC'}}>{isLoggedIn ? `Rol: ${userrol}` : 'Inicio de Sesión'}</em>
                            <nav>

                                <NavLink className={navLinkClasses} style={{color: '#CCCCCC'}} to="/">
                                    <label style={{color: 'whitesmoke'}}>Inicio</label>
                                </NavLink>
                                {username && userrol && (userrol === 'ADMIN') ? (
                                    <NavLink className={navLinkClasses} to="/apps">
                                        <label style={{color: 'whitesmoke'}}>Aplicaciones</label>
                                    </NavLink>
                                ) : ('')
                                }
                                {username && userrol && (userrol === 'ADMIN') ? (
                                    <NavLink className={navLinkClasses} style={{color: '#CCCCCC'}} to="/organismos">
                                        <label style={{color: 'whitesmoke'}}>Organismos</label>
                                    </NavLink>
                                ) : ('')
                                }

                                {username && userrol && (userrol === 'ADMIN') ? (
                                    <NavLink className={navLinkClasses} style={{color: '#CCCCCC'}} to="/usuarios">
                                        <label style={{color: 'whitesmoke'}}> ADM Usuarios</label>
                                    </NavLink>
                                ) : ('')
                                }
                                {username ?(
                                <NavLink className={navLinkClasses} to="/misApps">
                                    <label style={{color: 'whitesmoke'}}> Mis Apps</label>
                                </NavLink>
                                    ):('')
                                }

                                <NavLink className={navLinkClasses} to="/about">
                                    <label style={{color: 'whitesmoke'}}> Acerca de</label>
                                </NavLink>


                            </nav>
                            <button className={'btn btn-warning'} onClick={handleLogout}>Cerrar Sesión</button>
                        </>
                    ) : (<LoginForm onLogin={handleLogin}/>)}
                </header>
            </div>

            <DrawerToggle slot="navbar" aria-label="Menu toggle"></DrawerToggle>
            <h2 slot="navbar" className="text-l m-0">
                {currentTitle}
            </h2>

            <Suspense fallback={<Placeholder/>}>
                <Outlet/>
            </Suspense>
        </AppLayout>

    );
}
