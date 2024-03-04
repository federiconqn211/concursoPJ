import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import type App_1 from "./App.js";
class AppModel<T extends App_1 = App_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(AppModel);
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "java.lang.Long" } }));
    }
}
export default AppModel;
