const assert = require('assert');

let tambah = require('../pertambahan')

assert.deepStrictEqual(tambah(5, 6), 11, 'Test 5 + 6 apakah 11')

assert.deepStrictEqual(tambah(5, -1), 4, 'Test 5 + (-1) apakah 4')

assert.deepStrictEqual(tambah(5, 2), 7, 'Test 5 + 2 apakah 7')

assert.deepStrictEqual(tambah(5, '6'), 'Parameters value must be number', 'Params must be a number')

assert.deepStrictEqual(tambah(2), "You should add two parameters", 'Test without parameter')
