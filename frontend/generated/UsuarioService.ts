import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type App_1 from "./com/example/application/data/App.js";
import type Usuario_1 from "./com/example/application/data/Usuario.js";
import type UsuarioRecord_1 from "./com/example/application/services/UsuarioService/UsuarioRecord.js";
import client_1 from "./connect-client.default.js";
import type Filter_1 from "./dev/hilla/crud/filter/Filter.js";
import type Pageable_1 from "./dev/hilla/mappedtypes/Pageable.js";
import type HttpServletResponse_1 from "./jakarta/servlet/http/HttpServletResponse.js";
async function count_1(filter: Filter_1 | undefined, init?: EndpointRequestInit_1): Promise<number> { return client_1.call("UsuarioService", "count", { filter }, init); }
async function exists_1(id: number, init?: EndpointRequestInit_1): Promise<boolean> { return client_1.call("UsuarioService", "exists", { id }, init); }
async function get_1(id: number, init?: EndpointRequestInit_1): Promise<Usuario_1 | undefined> { return client_1.call("UsuarioService", "get", { id }, init); }
async function list_1(pageable: Pageable_1, filter: Filter_1 | undefined, init?: EndpointRequestInit_1): Promise<Array<Usuario_1>> { return client_1.call("UsuarioService", "list", { pageable, filter }, init); }
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("UsuarioService", "delete", { id }, init); }
async function deleteAll_1(ids: Array<number>, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("UsuarioService", "deleteAll", { ids }, init); }
async function save_1(usuario: UsuarioRecord_1, init?: EndpointRequestInit_1): Promise<UsuarioRecord_1> { return client_1.call("UsuarioService", "save", { usuario }, init); }
async function saveAll_1(values: Array<Usuario_1>, init?: EndpointRequestInit_1): Promise<Array<Usuario_1>> { return client_1.call("UsuarioService", "saveAll", { values }, init); }
async function asignarAppAUsuario_1(usuarioId: number, ApplId: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("UsuarioService", "asignarAppAUsuario", { usuarioId, ApplId }, init); }
async function autenticar_1(username: string, password: string, init?: EndpointRequestInit_1): Promise<Usuario_1> { return client_1.call("UsuarioService", "autenticar", { username, password }, init); }
async function borrarPorId_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("UsuarioService", "borrarPorId", { id }, init); }
async function findAllUsuarios_1(init?: EndpointRequestInit_1): Promise<Array<UsuarioRecord_1>> { return client_1.call("UsuarioService", "findAllUsuarios", {}, init); }
async function findAllUsuariossss_1(init?: EndpointRequestInit_1): Promise<Array<Usuario_1>> { return client_1.call("UsuarioService", "findAllUsuariossss", {}, init); }
async function generatePDF_1(users: Array<Usuario_1>, response: HttpServletResponse_1, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("UsuarioService", "generatePDF", { users, response }, init); }
async function getAllUsers_1(init?: EndpointRequestInit_1): Promise<Array<Usuario_1>> { return client_1.call("UsuarioService", "getAllUsers", {}, init); }
async function getUserAplicacionesPortal_1(username: string, init?: EndpointRequestInit_1): Promise<Array<App_1>> { return client_1.call("UsuarioService", "getUserAplicacionesPortal", { username }, init); }
async function getUserApplications_1(userId: number, init?: EndpointRequestInit_1): Promise<Array<App_1>> { return client_1.call("UsuarioService", "getUserApplications", { userId }, init); }
async function getUserNoApplications_1(userId: number, init?: EndpointRequestInit_1): Promise<Array<App_1>> { return client_1.call("UsuarioService", "getUserNoApplications", { userId }, init); }
async function getUsuarioApps_1(usuarioId: number, init?: EndpointRequestInit_1): Promise<Array<App_1>> { return client_1.call("UsuarioService", "getUsuarioApps", { usuarioId }, init); }
async function obtenerUsuarioYApps_1(usuarioId: number, init?: EndpointRequestInit_1): Promise<Usuario_1> { return client_1.call("UsuarioService", "obtenerUsuarioYApps", { usuarioId }, init); }
async function quitarAppAUsuario_1(usuarioId: number, ApplId: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("UsuarioService", "quitarAppAUsuario", { usuarioId, ApplId }, init); }
export { asignarAppAUsuario_1 as asignarAppAUsuario, autenticar_1 as autenticar, borrarPorId_1 as borrarPorId, count_1 as count, delete_1 as delete, deleteAll_1 as deleteAll, exists_1 as exists, findAllUsuarios_1 as findAllUsuarios, findAllUsuariossss_1 as findAllUsuariossss, generatePDF_1 as generatePDF, get_1 as get, getAllUsers_1 as getAllUsers, getUserAplicacionesPortal_1 as getUserAplicacionesPortal, getUserApplications_1 as getUserApplications, getUserNoApplications_1 as getUserNoApplications, getUsuarioApps_1 as getUsuarioApps, list_1 as list, obtenerUsuarioYApps_1 as obtenerUsuarioYApps, quitarAppAUsuario_1 as quitarAppAUsuario, save_1 as save, saveAll_1 as saveAll };
