var assert = require('assert') // use native assert from Node.js

var add = require('../addition')
var multiply = require('../multiply')
var deviden = require('../deviden')
var distraction = require('../distraction')
var exponent = require('../exponent')
var root = require('../root')

describe('Testing With Mocha', function () {
  describe('1. Addition', function () {
    it('should return 10 when value a = 5 & value b = 5', function () {
      assert.equal(add(5, 5), 10)
    })

    it('should have 2 parameters', function () {
      assert.equal(add(3), 'should have 2 parameters')
    })
  })

  describe('2. Multiply', function () {
    it('should return 25 when value a = 5 & value b = 5', function () {
      assert.equal(multiply(5, 5), 25)
    })

    it('should have 2 parameters', function () {
      assert.equal(multiply(3), 'should have 2 parameters')
    })
  })

  describe('3. Dividen', function () {
    it('should return 5 when value a = 25 & value b = 5', function () {
      assert.equal(deviden(25, 5), 5)
    })

    it('should have 2 parameters', function () {
      assert.equal(deviden(3), 'should have 2 parameters')
    })
  })

  describe('4. Distraction', function () {
    it('should return 5 when value a = 10 & value b = 5', function () {
      assert.equal(distraction(10, 5), 5)
    })

    it('should have 2 parameters', function () {
      assert.equal(distraction(3), 'should have 2 parameters')
    })
  })

  describe('5. Exponent', function () {
    it('should return 25 when value a = 5 & value b = 2', function () {
      assert.equal(exponent(5, 2), 25)
    })

    it('should have 2 parameters', function () {
      assert.equal(exponent(3), 'should have 2 parameters')
    })
  })

  describe('6. Root', function () {
    it('should return 10 when value a = 5 & value b = 2', function () {
      assert.equal(root(100), 10)
    })

    it('should have parameters', function () {
      assert.equal(root(), 'should have parameters')
    })
  })
})
