import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotNull as NotNull_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import AppModel_1 from "../../data/AppModel.js";
import OrganismoRecordModel_1 from "../OrganismoService/OrganismoRecordModel.js";
import type UsuarioRecord_1 from "./UsuarioRecord.js";
class UsuarioRecordModel<T extends UsuarioRecord_1 = UsuarioRecord_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(UsuarioRecordModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.Long" } }));
    }
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get apellido(): StringModel_1 {
        return this[_getPropertyModel_1]("apellido", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get dni(): NumberModel_1 {
        return this[_getPropertyModel_1]("dni", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "java.lang.Long" } }));
    }
    get domicilio(): StringModel_1 {
        return this[_getPropertyModel_1]("domicilio", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get password(): StringModel_1 {
        return this[_getPropertyModel_1]("password", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get telefono(): StringModel_1 {
        return this[_getPropertyModel_1]("telefono", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get tipo(): StringModel_1 {
        return this[_getPropertyModel_1]("tipo", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get username(): StringModel_1 {
        return this[_getPropertyModel_1]("username", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get organismo(): OrganismoRecordModel_1 {
        return this[_getPropertyModel_1]("organismo", (parent, key) => new OrganismoRecordModel_1(parent, key, false));
    }
    get apps(): ArrayModel_1<AppModel_1> {
        return this[_getPropertyModel_1]("apps", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new AppModel_1(parent, key, false), { meta: { javaType: "java.util.Set" } }));
    }
    get rol(): StringModel_1 {
        return this[_getPropertyModel_1]("rol", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
}
export default UsuarioRecordModel;
