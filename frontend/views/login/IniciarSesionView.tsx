import React, {useState} from 'react';
import LoginForm from './LoginForm';

const IniciarSesionView: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const handleLogin = (username: string, password: string) => {
        // Aquí puedes manejar la lógica de inicio de sesión, por ejemplo, enviar los datos al servidor.
        // Por simplicidad, asumiremos que el inicio de sesión es exitoso si el usuario es "admin" y la contraseña es "admin"
        if (username === 'admin' && password === 'admin') {
            {
                setIsLoggedIn(true);
                setUsername(username);

            }
        } else {
            console.log('Inicio de sesión fallido');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <div>
            <h1>{isLoggedIn ? `Bienvenido, ${username}` : 'Inicio de Sesión'}</h1>
            {isLoggedIn ? (
                <div>
                    <nav>
                        <ul>
                            <li>Menú Item 1</li>
                            <li>Menú Item 2</li>
                            <li>Menú Item 3</li>
                        </ul>
                    </nav>
                    <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};

export default IniciarSesionView;