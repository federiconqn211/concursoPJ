import React, { useState } from 'react';
import { useUser } from 'Frontend/views/login/UserContext';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginProps> = ({ onLogin }) => {

    //const [usernameInput, setUsernameInput] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    //const { setUsername } = useUser();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setError('Por favor, completa todos los campos');
            return;
        }
        onLogin(username, password);
    };




    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label style={{color: '#CCCCCC'}} htmlFor="username">Usuario:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label style={{color: '#CCCCCC'}} htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br/>
            <button className={'btn btn-success'} type="submit">Iniciar Sesión</button>
        </form>
    );
};

export default LoginForm;