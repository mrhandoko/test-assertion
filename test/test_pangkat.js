const assert = require('assert');

let pangkat = require('../pangkat')

assert.deepStrictEqual(pangkat(5, 2), 25, 'Test 5 ^ 2')

assert.deepStrictEqual(pangkat(81, 1/2), 9, 'Test 81 ^ 1/2')

assert.deepStrictEqual(pangkat(2, 5), 32, 'Test 5 ^ 2')

assert.deepStrictEqual(pangkat(5, '6'), 'Parameters value must be number', 'Params must be a number')

assert.deepStrictEqual(pangkat(2), "You should add two parameters", 'Test without parameter')
