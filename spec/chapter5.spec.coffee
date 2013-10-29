Chapter5 = require("../chapter5")

describe "Chapter 5", ->
  describe "InsertBitsAtPosition", ->
    it "can insert bits at a given position", ->
      result = Chapter5.insertBitsAtPosition(parseInt(10000000000, 2), parseInt(10011, 2), 2, 6)
      expect(result).toBe(parseInt(10001001100, 2))
      result2 = Chapter5.insertBitsAtPosition(parseInt(10000111100, 2), parseInt(10011, 2), 2, 6)
      expect(result).toBe(parseInt(10001001100, 2))
