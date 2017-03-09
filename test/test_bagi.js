const assert = require('assert');

let bagi = require('../pembagian')

assert.deepStrictEqual(bagi(5, 2), 2.5, 'Test 5 / 6')

assert.deepStrictEqual(bagi(5, 1), 5, 'Test 5 / 1')

assert.deepStrictEqual(bagi(20, 4), 5, 'Test 2 / 4')

assert.deepStrictEqual(bagi(5, '6'), 'Parameters value must be number', 'Params must be a number')

assert.deepStrictEqual(bagi(2), "You should add two parameters", 'Test without parameter')
