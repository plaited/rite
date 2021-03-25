import {assert, Try, match, wait} from '../assert.js'
const sum = (...args) => {
  if (args.some(v => Number.isNaN(v))) throw new TypeError('NaN')
  return args.reduce((acc, n) => acc + n, 0)
}

const resolveAfter = () => new Promise(resolve => {
  setTimeout(() => {
    resolve('resolved')
  }, 50)
})

describe('assert', () => {
  it('sum()', () => {
    const should = 'return the correct sum'
  
    assert({
      given: 'no arguments',
      should: 'return 0',
      actual: sum(),
      expected: 0,
    })
  
    assert({
      given: 'zero',
      should,
      actual: sum(2, 0),
      expected: 2,
    })
  
    assert({
      given: 'negative numbers',
      should,
      actual: sum(1, -4),
      expected: -3,
    })
    assert({
      given: 'NaN',
      should: 'throw',
      actual: Try(sum, 1, NaN),
      expected: new TypeError('NaN').toString(),
    })
  })
  it('async()', async () => {
    {
      const actual = await resolveAfter()
      assert({
        given: 'promise',
        should: 'resolve',
        actual,
        expected: 'resolved',
      })
    }
    {
      const error = new Error('ooops')
      assert({
        given: 'an async function that throws',
        should: 'await and return the value of the error',
        actual: (await Try(async () => { throw error }, 'irrelivant')),
        expected: error.toString(),
      })
    }
  })
  it('wait()', async () => {
    await wait(20)
    assert({
      given: 'a wait call',
      should: 'should pause for 20ms',
      actual: true,
      expected: true,
    })
  })
  it('match', () => {
    {
      const given = 'some text to search and a pattern to match'
      const should = 'return the matched text'
  
      const textToSearch = '<h1>Dialog Title</h1>'
      const pattern = 'Dialog Title'
      const contains = match(textToSearch)
  
      assert({
        given,
        should,
        actual: contains(pattern),
        expected: pattern,
      })
    }
  
    {
      const given = 'some text with digits'
      const should = 'return the matched text'
  
      const textWithDigit = '<h1>There are 4 cats</h1>'
      const pattern = /\d+\s\w+/i
      const contains = match(textWithDigit)
  
      assert({
        given,
        should,
        actual: contains(pattern),
        expected: '4 cats',
      })
    }
    
  })
  it('Required Params', () => {
    {
      try {
        assert({})
      } catch (error) {
        assert({
          given: 'calling `assert` with missing keys',
          should: 'throw with missing keys',
          actual: error.message,
          expected: 'The following parameters are required by `assert`: given, should, actual, expected',
        })
      }
    }
    {
      try {
        assert({given: 'some keys', should: 'find the missing keys'})
      } catch (error) {
        assert({
          given: 'calling `assert` with missing keys',
          should: 'throw with missing keys',
          actual: error.message,
          expected: 'The following parameters are required by `assert`: actual, expected',
        })
      }
    }
  })
  it.skip('skip()', () => {
    assert({
      given: 'describe.skip',
      should: 'be equal to tape.skip',
      actual: 'skipped test',
      expected: 'test',
    })
  })
})
