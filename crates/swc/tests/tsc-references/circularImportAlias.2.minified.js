//// [circularImportAlias.ts]
// expected no error
var B, A, B1, D, A1;
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
import { _ as _inherits } from "@swc/helpers/_/_inherits";
import { _ as _create_super } from "@swc/helpers/_/_create_super";
D = function(_a_C) {
    _inherits(D, _a_C);
    var _super = _create_super(D);
    function D() {
        return _class_call_check(this, D), _super.apply(this, arguments);
    }
    return D;
}(((B1 = B || (B = {})).a = A).C), B1.D = D, (A1 = A || (A = {})).C = function C() {
    _class_call_check(this, C);
}, A1.b = B, new B.a.C();
