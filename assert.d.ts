interface Assertion<T> {
  given: string,
  should: string,
  actual: T,
  expected: T,
}
export function assert(args: Assertion): void;
export function Try<U extends any[], V>(fn: (...args: U) => V, ...args: U): any | Promise<any>
export function match(text: string): (pattern: string | RegExp) => string;
export function wait(ms: number): Promise<any>;
