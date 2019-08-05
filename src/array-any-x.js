import toObject from 'to-object-x';
import toLength from 'to-length-x';
import splitIfBoxedBug from 'split-if-boxed-bug-x';
import assertIsFunction from 'assert-is-function-x';

// eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature
/**
 * This method tests whether some element in the array passes the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function to test for each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {boolean} `true` if the callback function returns a truthy value for
 *  any array element; otherwise, `false`.
 */
// eslint-enable jsdoc/check-param-names
const any = function any(array, callBack /* , thisArg */) {
  const object = toObject(array);
  // If no callback function or if callback is not a callable function
  assertIsFunction(callBack);
  const iterable = splitIfBoxedBug(object);
  const length = toLength(iterable.length);
  /* eslint-disable-next-line prefer-rest-params,no-void */
  const thisArg = arguments.length > 2 ? arguments[2] : void 0;
  const noThis = typeof thisArg === 'undefined';

  if (length) {
    for (let index = 0; index < length; index += 1) {
      const item = iterable[index];

      if (noThis ? callBack(item, index, object) : callBack.call(thisArg, item, index, object)) {
        return true;
      }
    }
  }

  return false;
};

export default any;
