<a
  href="https://travis-ci.org/Xotic750/array-any-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/array-any-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/array-any-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/array-any-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/array-any-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/array-any-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/array-any-x"
  title="npm version">
<img src="https://badge.fury.io/js/array-any-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/array-any-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/array-any-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/array-any-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/array-any-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_array-any-x"></a>

## array-any-x

Tests whether some element passes the provided function.

<a name="exp_module_array-any-x--module.exports"></a>

### `module.exports` ⇒ <code>boolean</code> ⏏

This method tests whether any element in the array passes the test
implemented by the provided function.

**Kind**: Exported member  
**Returns**: <code>boolean</code> - `true` if the callback function returns a truthy value for
any array element; otherwise, `false`.  
**Throws**:

- <code>TypeError</code> If array is null or undefined.
- <code>TypeError</code> If callBack is not a function.

| Param     | Type                  | Description                                   |
| --------- | --------------------- | --------------------------------------------- |
| array     | <code>array</code>    | The array to iterate over.                    |
| callBack  | <code>function</code> | Function to test for each element.            |
| [thisArg] | <code>\*</code>       | Value to use as this when executing callback. |

**Example**

```js
import any from 'array-any-x';

function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log(any([2, 5, 8, 1, 4], isBiggerThan10)); // false
console.log(any([12, 5, 8, 1, 4], isBiggerThan10)); // true
```
