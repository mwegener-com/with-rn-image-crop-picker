"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parseColor = _interopRequireDefault(require("parse-color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CanvasGradient {
  constructor() {
    this.addColorStop = jest.fn(this.addColorStop.bind(this));
  }

  addColorStop(offset, color) {
    const numoffset = Number(offset);
    const colorstr = String(color);

    if (!Number.isFinite(numoffset) || numoffset < 0 || numoffset > 1) {
      throw new DOMException('IndexSizeError', 'Failed to execute \'addColorStop\' on \'CanvasGradient\': The provided value (\'' + numoffset + '\') is outside the range (0.0, 1.0)');
    }

    const output = (0, _parseColor.default)(colorstr);

    if (!output.hex) {
      throw new SyntaxError('Failed to execute \'addColorStop\' on \'CanvasGradient\': The value provided (\'' + color + '\') could not be parsed as a color.');
    }
  }

}

exports.default = CanvasGradient;