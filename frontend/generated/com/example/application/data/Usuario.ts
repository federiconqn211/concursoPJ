import type App_1 from "./App.js";
import type Organismo_1 from "./Organismo.js";
interface Usuario {
    id: number;
    nombre: string;
    apellido: string;
    username: string;
    password: string;
    dni: number;
    domicilio: string;
    telefono: string;
    email: string;
    tipo: string;
    organismo: Organismo_1;
    apps: Array<App_1>;
    rol: string;
}
export default Usuario;
