webpackHotUpdate(5,{

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(449);

var _web = __webpack_require__(973);

var _web2 = _interopRequireDefault(_web);

var _campaign = __webpack_require__(1026);

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/colechalland/Projects/Ethereum-Blockchain/kickstart/components/RequestRow.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.approveRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.finalizeRequest(_this.props.id).send({
                from: accounts[0]
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          approversCount = _props.approversCount;

      var readyToFinalize = request.approvalCount > approversCount / 2;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Finalize')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDSixxRkFBWSxtQkFBQTtvQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFDSjtBQURJLHlCQUNPLHdCQUFTLE1BQUEsQUFBSyxNQURyQixBQUNPLEFBQW9COzhCQUQzQjtxQkFFYSxjQUFBLEFBQUssSUFGbEIsQUFFYSxBQUFTOztpQkFBMUI7QUFGSSxrQ0FBQTs4QkFBQTs4QkFHSixBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0JBQzdDLFNBSkUsQUFHSixBQUFvRCxBQUNsRCxBQUFTO0FBRHlDLEFBQ3hELGVBREk7O2lCQUhJO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0EsZUFRWixBLHNGQUFhLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUNMO0FBREsseUJBQ00sd0JBQVMsTUFBQSxBQUFLLE1BRHBCLEFBQ00sQUFBb0I7K0JBRDFCO3FCQUVZLGNBQUEsQUFBSyxJQUZqQixBQUVZLEFBQVM7O2lCQUExQjtBQUZLLG1DQUFBOytCQUFBOzhCQUdMLEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEO3NCQUM5QyxTQUpHLEFBR0wsQUFBcUQsQUFDbkQsQUFBUztBQUQwQyxBQUN6RCxlQURJOztpQkFISztpQkFBQTsrQkFBQTs7QUFBQTttQkFBQTtBOzs7Ozs2QkFRSjtVQUFBLEFBQ0MsTUFERCxBQUNlLHVCQURmLEFBQ0M7VUFERCxBQUNNLE9BRE4sQUFDZSx1QkFEZixBQUNNO21CQUMyQixLQUZqQyxBQUVzQztVQUZ0QyxBQUVDLFlBRkQsQUFFQztVQUZELEFBRUssaUJBRkwsQUFFSztVQUZMLEFBRWMsd0JBRmQsQUFFYyxBQUNyQjs7VUFBTSxrQkFBa0IsUUFBQSxBQUFRLGdCQUFnQixpQkFBaEQsQUFBaUUsQUFFakU7OzZCQUNHLGNBQUQsT0FBSyxVQUFVLFFBQWYsQUFBdUIsVUFBVSxVQUFVLG1CQUFtQixDQUFDLFFBQS9ELEFBQXVFO29CQUF2RTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxTQURGLEFBQ0UsQUFDQSxxQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFGRixBQUVFLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSx1QkFBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSHBDLEFBR0UsQUFBTyxBQUFrQyxBQUN6QywyQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFKRixBQUlFLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxpQkFBQSxBQUFlLGVBQWdCLEtBTGpDLEFBS0UsQUFDQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxpQkFDRyxBQUFRLFdBQVIsQUFBbUIsdUJBQ2xCLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEIsTUFBNEIsU0FBUyxLQUFyQyxBQUEwQztvQkFBMUM7c0JBQUE7QUFBQTtPQUFBLEVBUk4sQUFNRSxBQUVJLEFBR0osNkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsaUJBQ0csQUFBUSxXQUFSLEFBQW1CLHVCQUNsQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUFBO0FBQUE7T0FBQSxFQWRSLEFBQ0UsQUFXRSxBQUVJLEFBS1Q7Ozs7O0FBekNzQixBLEFBNEN6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9jb2xlY2hhbGxhbmQvUHJvamVjdHMvRXRoZXJldW0tQmxvY2tjaGFpbi9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/colechalland/Projects/Ethereum-Blockchain/kickstart/components/RequestRow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/colechalland/Projects/Ethereum-Blockchain/kickstart/components/RequestRow.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44MDk2NDE4Y2U3ZWJhMzU5MzBjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzPzE4MGQ5NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5cbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbkFwcHJvdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xuICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICB9KTtcbiAgfTtcblxuICBvbkZpbmFsaXplID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4gICAgICBmcm9tOiBhY2NvdW50c1swXVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XG4gICAgY29uc3QgeyBpZCwgcmVxdWVzdCwgYXBwcm92ZXJzQ291bnQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgcmVhZHlUb0ZpbmFsaXplID0gcmVxdWVzdC5hcHByb3ZhbENvdW50ID4gYXBwcm92ZXJzQ291bnQgLyAyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgZGlzYWJsZWQ9e3JlcXVlc3QuY29tcGxldGV9IHBvc2l0aXZlPXtyZWFkeVRvRmluYWxpemUgJiYgIXJlcXVlc3QuY29tcGxldGV9PlxuICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuICAgICAgICA8Q2VsbD57cmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XG4gICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgJ2V0aGVyJyl9PC9DZWxsPlxuICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxuICAgICAgICA8Q2VsbD57cmVxdWVzdC5hcHByb3ZhbENvdW50fS97YXBwcm92ZXJzQ291bnR9PC9DZWxsPlxuICAgICAgICA8Q2VsbD5cbiAgICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ2VsbD5cbiAgICAgICAgPENlbGw+XG4gICAgICAgICAge3JlcXVlc3QuY29tcGxldGUgPyBudWxsIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRlYWxcIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PkZpbmFsaXplPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9DZWxsPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQVFBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=