Chapter5 = require("../chapter5")

describe "Chapter 5", ->
  describe "InsertBitsAtPosition", ->
    it "can insert bits at a given position", ->
      result = Chapter5.insertBitsAtPosition(parseInt(10000000000, 2), parseInt(10011, 2), 2, 6)
      expect(result).toBe(parseInt(10001001100, 2))
      result2 = Chapter5.insertBitsAtPosition(parseInt(10000111100, 2), parseInt(10011, 2), 2, 6)
      expect(result).toBe(parseInt(10001001100, 2))
  describe "toBinary", ->
    it "can turn decimal into binary string", ->
      expect(Chapter5.toBinary(.5)).toBe "0.1"
      expect(Chapter5.toBinary(.72)).toBe false
      expect(Chapter5.toBinary(.125)).toBe "0.001"
