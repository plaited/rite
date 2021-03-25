import chai from 'chai'

const trueTypeOf = obj =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
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
  const primitive = trueTypeOf(expected) === 'string' || 'number' || 'bigint' || 'boolean' || 'symbol'
  primitive ? chai.assert.equal(actual, expected, message) : chai.assert.deepEqual(actual, expected, message)
}

const noop = () => {}
const isPromise = x => x && typeof x.then === 'function'
const catchAndReturn = x => x.catch(y => y)
const catchPromise = x => (isPromise(x) ? catchAndReturn(x) : x)

export const Try = (fn = noop, ...args) => {
  try {
    return catchPromise(fn(...args))
  } catch (err) {
    return err.toString()
  }
}

export const match = text => pattern => {
  const RE = new RegExp(pattern)
  const matched = text.match(RE)
  return matched ? matched[0] : ''
}

export const wait = async ms => new Promise(resolve => {
  setTimeout(resolve, ms)
})
