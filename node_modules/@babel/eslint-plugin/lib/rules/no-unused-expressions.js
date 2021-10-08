"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eslintRuleComposer = require("eslint-rule-composer");

var _eslint = require("eslint");

const rule = new _eslint.Linter().getRules().get("no-unused-expressions");

function isFinalStatementInBlockStatement(node) {
  const parent = node.parent;
  return /^(?:If|Expression)Statement$/.test(node.type) && parent.type === "BlockStatement" && parent.body[parent.body.length - 1] === node;
}

function isInDoStatement(node) {
  if (!node) return false;
  if (node.type === "DoExpression") return true;

  if (node.type === "IfStatement" && node.parent && node.parent.type === "IfStatement") {
    return isInDoStatement(node.parent);
  }

  if (isFinalStatementInBlockStatement(node)) {
    return isInDoStatement(node.parent.parent);
  }

  return false;
}

function isOptionalCallExpression(node) {
  return !!node && node.type === "ExpressionStatement" && node.expression.type === "ChainExpression" && node.expression.expression.type === "CallExpression";
}

var _default = _eslintRuleComposer.filterReports(rule, problem => !isInDoStatement(problem.node) && !isOptionalCallExpression(problem.node));

exports.default = _default;