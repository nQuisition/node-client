'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RepresentationList = require('./representationList');

var EndpointList = (function (_RepresentationList) {
  _inherits(EndpointList, _RepresentationList);

  function EndpointList(client, parent) {
    _classCallCheck(this, EndpointList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EndpointList).call(this, client, parent));

    _this.type = 'endpointList';
    _this.itemType = 'endpoint';
    return _this;
  }

  return EndpointList;
})(RepresentationList);

module.exports = EndpointList;