"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.rulesConfig = exports.rules = void 0;

var _newCap = require("./rules/new-cap");

var _noInvalidThis = require("./rules/no-invalid-this");

var _noUnusedExpressions = require("./rules/no-unused-expressions");

var _objectCurlySpacing = require("./rules/object-curly-spacing");

var _semi = require("./rules/semi");

const rules = {
  "new-cap": _newCap.default,
  "no-invalid-this": _noInvalidThis.default,
  "no-unused-expressions": _noUnusedExpressions.default,
  "object-curly-spacing": _objectCurlySpacing.default,
  semi: _semi.default
};
exports.rules = rules;
const rulesConfig = {
  "new-cap": "off",
  "no-invalid-this": "off",
  "no-unused-expressions": "off",
  "object-curly-spacing": "off",
  semi: "off"
};
exports.rulesConfig = rulesConfig;
var _default = {
  rules,
  rulesConfig
};
exports.default = _default;