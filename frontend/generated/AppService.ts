import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type App_1 from "./com/example/application/data/App.js";
import type AppRecord_1 from "./com/example/application/services/AppService/AppRecord.js";
import client_1 from "./connect-client.default.js";
import type Filter_1 from "./dev/hilla/crud/filter/Filter.js";
import type Pageable_1 from "./dev/hilla/mappedtypes/Pageable.js";
async function count_1(filter: Filter_1 | undefined, init?: EndpointRequestInit_1): Promise<number> { return client_1.call("AppService", "count", { filter }, init); }
async function exists_1(id: number, init?: EndpointRequestInit_1): Promise<boolean> { return client_1.call("AppService", "exists", { id }, init); }
async function get_1(id: number, init?: EndpointRequestInit_1): Promise<App_1 | undefined> { return client_1.call("AppService", "get", { id }, init); }
async function list_1(pageable: Pageable_1, filter: Filter_1 | undefined, init?: EndpointRequestInit_1): Promise<Array<App_1>> { return client_1.call("AppService", "list", { pageable, filter }, init); }
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("AppService", "delete", { id }, init); }
async function deleteAll_1(ids: Array<number>, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("AppService", "deleteAll", { ids }, init); }
async function save_1(app: AppRecord_1, init?: EndpointRequestInit_1): Promise<AppRecord_1> { return client_1.call("AppService", "save", { app }, init); }
async function saveAll_1(values: Array<App_1>, init?: EndpointRequestInit_1): Promise<Array<App_1>> { return client_1.call("AppService", "saveAll", { values }, init); }
async function findAllApps_1(init?: EndpointRequestInit_1): Promise<Array<AppRecord_1>> { return client_1.call("AppService", "findAllApps", {}, init); }
export { count_1 as count, delete_1 as delete, deleteAll_1 as deleteAll, exists_1 as exists, findAllApps_1 as findAllApps, get_1 as get, list_1 as list, save_1 as save, saveAll_1 as saveAll };
