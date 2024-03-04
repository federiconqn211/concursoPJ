import type App_1 from "../../data/App.js";
import type OrganismoRecord_1 from "../OrganismoService/OrganismoRecord.js";
interface UsuarioRecord {
    id: number;
    nombre: string;
    apellido: string;
    dni: number;
    domicilio: string;
    email: string;
    password: string;
    telefono: string;
    tipo: string;
    username: string;
    organismo: OrganismoRecord_1;
    apps: Array<App_1>;
    rol: string;
}
export default UsuarioRecord;
