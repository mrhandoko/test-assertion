const assert = require('assert');

let akar = require('../akaran')

assert.deepStrictEqual(akar(25), 5, 'Test akar 5')

assert.deepStrictEqual(akar(81), 9, 'Test akar 81')

assert.deepStrictEqual(akar(64), 8, 'Test akar 64')

assert.deepStrictEqual(akar('6'), 'Parameters value must be number', 'Params must be a number')

assert.deepStrictEqual(akar(-12), -12, 'Test without parameter')
