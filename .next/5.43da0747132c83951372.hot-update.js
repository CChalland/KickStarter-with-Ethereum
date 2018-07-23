webpackHotUpdate(5,{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = __webpack_require__(493);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in the browser and metamask is runnig.
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // We are on the browser *OR* the user is not running metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDckU7QUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBQ0g7QUFIRCxPQUdPLEFBQ0g7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFHQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2NvbGVjaGFsbGFuZC9Qcm9qZWN0cy9FdGhlcmV1bS1CbG9ja2NoYWluL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/colechalland/Projects/Ethereum-Blockchain/kickstart/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/colechalland/Projects/Ethereum-Blockchain/kickstart/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40M2RhMDc0NzEzMmM4Mzk1MTM3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz8xM2IyMWZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5sZXQgd2ViMztcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBXZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pZy5cbiAgICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbn0gZWxzZSB7XG4gICAgLy8gV2UgYXJlIG9uIHRoZSBicm93c2VyICpPUiogdGhlIHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgICAgICdodHRwczovL3JpbmtlYnkuaW5mdXJhLmlvL29yREltZ0tSendOclZDRHJBazVRJ1xuICAgICk7XG4gICAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2ViMztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ldGhlcmV1bS93ZWIzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9