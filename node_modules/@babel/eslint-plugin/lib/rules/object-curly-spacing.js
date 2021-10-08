"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eslintRuleComposer = require("eslint-rule-composer");

var _eslint = require("eslint");

const rule = new _eslint.Linter().getRules().get("object-curly-spacing");

var _default = _eslintRuleComposer.filterReports(rule, problem => {
  const node = problem.node;

  if (node.type === "ExportNamedDeclaration" && node.specifiers.length === 1 && node.specifiers[0].type === "ExportDefaultSpecifier") {
    return false;
  }

  return true;
});

exports.default = _default;