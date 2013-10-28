Chapter3 = require("../chapter3")

describe "Chapter 3", ->
  describe "3 Stack", ->
    describe "it can have 3 stacks in an array", ->
      stack = new Chapter3.ThreeStack()
      stack.push(1, 1)
      stack.push(1, 2)
      stack.push(1, 3)
      stack.push(2, 13)
      stack.push(2, 14)
      stack.push(2, 15)
      stack.push(3, 15)
      stack.push(3, 16)
      stack.push(3, 17)
      expect(stack.pop(1)).toBe 3
      expect(stack.pop(1)).toBe 2
      expect(stack.pop(2)).toBe 15
      expect(stack.pop(2)).toBe 14
      expect(stack.pop(3)).toBe 17
