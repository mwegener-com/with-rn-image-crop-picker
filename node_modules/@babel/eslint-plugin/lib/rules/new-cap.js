"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eslintRuleComposer = require("eslint-rule-composer");

var _eslint = require("eslint");

const rule = new _eslint.Linter().getRules().get("new-cap");

function isDecorator(node) {
  return node.parent.type === "Decorator";
}

var _default = _eslintRuleComposer.filterReports(rule, problem => !isDecorator(problem.node));

exports.default = _default;