import { describe, expect, test } from 'vitest'
import { sum, addArray } from '../../src/helpers/sun'

describe('sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Arrange
    const a = 1
    const b = 2

    // Act
    const result = sum(a, b)

    // Assert
    expect(result).toBe(a + b)
  })
})

describe('addArray function', () => {
  test('should return 0 if  the array is empty', () => {
    // Arrange
    const arr = []

    // Act
    const result = addArray(arr)

    // Assert
    expect(result).toBe(0)
  })

  test('sum array of numbers', () => {
    // Arrange
    const arr = [1, 2, 3, 4, 5]

    // Act
    const result = addArray(arr)

    // Assert
    expect(result).toBe(15)
  })
})
