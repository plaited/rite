
import equal from 'fast-deep-equal'

const is = (actual, expected, message) => {
  if(equal(actual, expected)) return message
  /* c8 ignore next */
  throw new Error(message)
}

const requiredKeys = ['given', 'should', 'actual', 'expected']
const concatToString = (keys, key, index) => keys + (index ? ', ' : '') + key

export const assert = (args = {}) => {
  const missing = requiredKeys.filter(
    k => !Object.keys(args).includes(k),
  )
 
  if (missing.length) {
    throw new Error(`The following parameters are required by \`assert\`: ${missing.reduce(concatToString, '')}`)
  }

  const {
    given = undefined,
    should = '',
    actual = undefined,
    expected = undefined,
  } = args
  const message = `Given ${given}: should ${should}`
  is(actual, expected, message)
}

const noop = () => {}
const isPromise = x => x && typeof x.then === 'function'
const catchAndReturn = x => x.catch(y => y)
const catchPromise = x => (isPromise(x) ? catchAndReturn(x) : x)

export const Try = (fn = noop, ...args) => {
  try {
    return catchPromise(fn(...args))
  } catch (err) {
    return err
  }
}

export const match = text => pattern => {
  const RE = new RegExp(pattern)
  const matched = text.match(RE)
  return matched ? matched[0] : ''
}