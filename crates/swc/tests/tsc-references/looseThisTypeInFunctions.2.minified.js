//// [looseThisTypeInFunctions.ts]
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var u, /*#__PURE__*/ c = new (function() {
    function C() {
        _class_call_check(this, C);
    }
    var _proto = C.prototype;
    return _proto.explicitThis = function(m) {
        return this.n + m;
    }, _proto.implicitThis = function(m) {
        return this.n + m;
    }, _proto.explicitVoid = function(m) {
        return m + 1;
    }, C;
}())();
c.explicitVoid = c.explicitThis;
var o = {
    n: 101,
    explicitThis: function(m) {
        return m + this.n.length; // error, 'length' does not exist on 'number'
    },
    implicitThis: function(m) {
        return m;
    }
};
(0, o.explicitThis)(12), (0, u.implicitNoThis)(12), c.explicitVoid = c.implicitThis // ok, implicitThis(this:any)
, o.implicitThis = c.implicitThis, o.implicitThis = c.explicitThis, o.implicitThis = o.explicitThis, o.explicitThis = function(m) {
    return this.n.length; // error, this.n: number
};
