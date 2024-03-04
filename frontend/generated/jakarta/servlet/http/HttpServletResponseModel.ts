import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import type HttpServletResponse_1 from "./HttpServletResponse.js";
class HttpServletResponseModel<T extends HttpServletResponse_1 = HttpServletResponse_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(HttpServletResponseModel);
    get status(): NumberModel_1 {
        return this[_getPropertyModel_1]("status", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "int" } }));
    }
    get headerNames(): ArrayModel_1<StringModel_1> {
        return this[_getPropertyModel_1]("headerNames", (parent, key) => new ArrayModel_1(parent, key, true, (parent, key) => new StringModel_1(parent, key, true, { meta: { javaType: "java.lang.String" } }), { meta: { javaType: "java.util.Collection" } }));
    }
    get trailerFields(): ObjectModel_1 {
        return this[_getPropertyModel_1]("trailerFields", (parent, key) => new ObjectModel_1(parent, key, false, { meta: { javaType: "java.util.function.Supplier" } }));
    }
}
export default HttpServletResponseModel;
