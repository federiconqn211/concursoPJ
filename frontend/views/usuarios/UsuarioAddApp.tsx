import React from 'react';
import {asignarAppAUsuario} from "Frontend/generated/UsuarioService";


function App() {
    const handleClick = (usuarioId: number, appId: number) => {
        asignarAppAUsuario(usuarioId, appId); // Llamar al método con los ID de usuario y rol
    };

    return (
        <div>
            <button onClick={() => handleClick(1, 2)}>Asignar App usr=1 App=2</button>
        </div>
    );
}

export default App;