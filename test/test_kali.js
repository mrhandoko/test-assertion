const assert = require('assert');

let kali = require('../perkalian')

assert.deepStrictEqual(kali(5, 6), 30, 'Test 5 * 6')

assert.deepStrictEqual(kali(5, -1), -5, 'Test 5 * (-1)')

assert.deepStrictEqual(kali(5, 2), 10, 'Test 5 * 2')

assert.deepStrictEqual(kali(5, '6'), 'Parameters value must be number', 'Params must be a number')

assert.deepStrictEqual(kali(2), "You should add two parameters", 'Test without parameter')
