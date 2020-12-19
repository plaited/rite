# assert
Assert library based on [riteway](https://github.com/ericelliott/riteway)
Use with Mocha

## Install

`npm install --save-dev riteway`

Then add these scripts to your package.json
```json
{
  "test": "mocha",
  "test:ci": "c8 --check-coverage npm test"
}
```

## Example

```js
import { assert, Try, match } from '@assembl-dev/assert'
describe('assert', () => {
  it('sum()', () => {
    const should = 'return the correct sum';
  
    assert({
      given: 'no arguments',
      should: 'return 0',
      actual: sum(),
      expected: 0,
    });
  
    assert({
      given: 'zero',
      should,
      actual: sum(2, 0),
      expected: 2,
    });
  
    assert({
      given: 'negative numbers',
      should,
      actual: sum(1, -4),
      expected: -2,
    });
  
    assert({
      given: 'NaN',
      should: 'throw',
      actual: Try(sum, 1, NaN),
      expected: new TypeError('NaN').toString(),
    });
  })
  it('async()', async () => {
    const actual = await resolveAfter();
    assert({
      given: 'promise',
      should: 'resolve',
      actual,
      expected: 'resolved',
    });
  })
  it('match', () => {
    const given = 'some text to search and a pattern to match';
    const should = 'return the matched text';

    const textToSearch = '<h1>Dialog Title</h1>';
    const pattern = 'Dialog Title';
    const contains = match(textToSearch);

    assert({
      given,
      should,
      actual: contains(pattern),
      expected: pattern,
    });
  })
```


## assert
```ts
interface Assertion<T> {
  readonly given: any
  readonly should: string
  readonly actual: T
  readonly expected: T
}
export function assert<T>(args?: Assertion<T>): void;
```
The assert function is the function you call to make your assertions. It takes prose descriptions for given and should (which should be strings), and invokes the test harness to evaluate the pass/fail status of the test.

Note that assert uses a [deep equality](https://www.npmjs.com/package/fast-deep-equal) check to compare the actual and expected values. Rarely, you may need another kind of check. In those cases, pass a JavaScript expression for the actual value.

## match
```ts
export function match(text: string): (pattern: string | RegExp) => string;
```
Take some text to search and return a function which takes a pattern and returns the matched text, if found, or an empty string. The pattern can be a string or regular expression.

## Try
```ts
export function Try<U extends any[], V>(fn: (...args: U) => V, ...args: U): any | Promise<any>;
```
Test if a function throws an error. It take the function which can be a synchronous or asynchronous along with n arguments. It catches the thrown error and returns `error.toString()`. 