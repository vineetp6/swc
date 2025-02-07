//// [exportCodeGen.ts]
// should replace all refs to 'x' in the body,
// with fully qualified
import { _ as _class_call_check } from "@swc/helpers/_/_class_call_check";
var A;
(function(A) {
    var lt12 = function lt12() {
        return A.x < 12;
    };
    A.x = 12;
})(A || (A = {}));
var B;
// should not fully qualify 'x'
(function(B) {
    var lt12 = function lt12() {
        return x < 12;
    };
    var x = 12;
})(B || (B = {}));
var C;
// not copied, since not exported
(function(C) {
    var no = function no() {
        return false;
    };
})(C || (C = {}));
var D;
// copies, since exported
(function(D) {
    var yes = function yes() {
        return true;
    };
    D.yes = yes;
})(D || (D = {}));
var E;
// validate all exportable statements
(function(E) {
    var fn = function fn() {};
    var Color;
    (function(Color) {
        Color[Color["Red"] = 0] = "Red";
    })(Color = E.Color || (E.Color = {}));
    E.fn = fn;
    var C = function C() {
        "use strict";
        _class_call_check(this, C);
    };
    E.C = C;
    var M;
    (function(M) {
        M.x = 42;
    })(M = E.M || (E.M = {}));
})(E || (E = {}));
var F;
// validate all exportable statements,
// which are not exported
(function(F) {
    var fn = function fn() {};
    var Color;
    (function(Color) {
        Color[Color["Red"] = 0] = "Red";
    })(Color || (Color = {}));
    var C = function C() {
        "use strict";
        _class_call_check(this, C);
    };
    var M;
    (function(M) {
        var x = 42;
    })(M || (M = {}));
})(F || (F = {}));
