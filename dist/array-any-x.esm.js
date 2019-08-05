function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import toObject from 'to-object-x';
import toLength from 'to-length-x';
import splitIfBoxedBug from 'split-if-boxed-bug-x';
import assertIsFunction from 'assert-is-function-x';

var performCallback = function performCallback(args) {
  var _args = _slicedToArray(args, 6),
      noThis = _args[0],
      thisArg = _args[1],
      callBack = _args[2],
      iterable = _args[3],
      index = _args[4],
      object = _args[5];

  var item = iterable[index];
  return noThis ? callBack(item, index, object) : callBack.call(thisArg, item, index, object);
};

var getIterableLengthPair = function getIterableLengthPair(object) {
  var iterable = splitIfBoxedBug(object);
  return [iterable, toLength(iterable.length)];
}; // eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature

/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @function any
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */
// eslint-enable jsdoc/check-param-names


var any = function any(array, callBack
/* , thisArg */
) {
  var object = toObject(array); // If no callback function or if callback is not a callable function

  assertIsFunction(callBack);

  var _getIterableLengthPai = getIterableLengthPair(object),
      _getIterableLengthPai2 = _slicedToArray(_getIterableLengthPai, 2),
      iterable = _getIterableLengthPai2[0],
      length = _getIterableLengthPai2[1];
  /* eslint-disable-next-line prefer-rest-params,no-void */


  var thisArg = arguments.length > 2 ? arguments[2] : void 0;
  var noThis = typeof thisArg === 'undefined';

  if (length) {
    for (var index = 0; index < length; index += 1) {
      if (performCallback([noThis, thisArg, callBack, iterable, index, object])) {
        return true;
      }
    }
  }

  return false;
};

export default any;

//# sourceMappingURL=array-any-x.esm.js.map