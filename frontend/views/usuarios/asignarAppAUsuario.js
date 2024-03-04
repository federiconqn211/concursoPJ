import axios from 'axios';

export function asignarAppAUsuario(usuarioId, appId) {
    axios.post(`/api/usuarios/${usuarioId}/apps/${appId}`)
        .then(response => {
            console.log("App asignada exitosamente");
        })
        .catch(error => {
            console.error("Error al asignar App:", error);
        });
}


