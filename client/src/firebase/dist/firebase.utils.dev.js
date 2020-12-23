"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.signInWithGoogle = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "AIzaSyCDxeYXYpBYPpEsrk5vX5WiPRkD1IOuXJ0",
  authDomain: "eleclothing.firebaseapp.com",
  databaseURL: "https://eleclothing.firebaseio.com",
  projectId: "eleclothing",
  storageBucket: "eleclothing.appspot.com",
  messagingSenderId: "287684056363",
  appId: "1:287684056363:web:1e6495d46a97759ee9616e"
};

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;
var _default = _app["default"];
exports["default"] = _default;