"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eslintRuleComposer = require("eslint-rule-composer");

var _eslint = require("eslint");

const noInvalidThisRule = new _eslint.Linter().getRules().get("no-invalid-this");

var _default = _eslintRuleComposer.filterReports(noInvalidThisRule, problem => {
  let inClassMember = false;
  let node = problem.node;

  while (node) {
    if (node.type === "ClassPrivateMethod" || node.type === "ClassPrivateProperty" || node.type === "ClassProperty" || node.type === "PropertyDefinition" || node.type === "MethodDefinition" && node.key.type === "PrivateIdentifier") {
      inClassMember = true;
      break;
    } else if (node.type === "FunctionDeclaration" || node.type === "FunctionExpression") {
      inClassMember = false;
      break;
    }

    node = node.parent;
  }

  return !inClassMember;
});

exports.default = _default;