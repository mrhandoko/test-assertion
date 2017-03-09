const assert = require('assert');

let kurang = require('../pengurangan')

assert.deepStrictEqual(kurang(5, 6), -1, 'Test 5 - 6')

assert.deepStrictEqual(kurang(5, -1), 6, 'Test 5 - (-1)')

assert.deepStrictEqual(kurang(5, 2), 3, 'Test 5 - 2')

assert.deepStrictEqual(kurang(5, '6'), 'Parameters value must be number', 'Params must be a number')

assert.deepStrictEqual(kurang(2), "You should add two parameters", 'Test without parameter')
