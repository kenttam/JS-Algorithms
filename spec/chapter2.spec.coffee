Chapter2 = require("../chapter2")

describe "Chapter 2", ->
  describe "RemoveDuplicates", ->
    node1 = new Chapter2.Node(1)
    node1.appendToTail(2)
    node1.appendToTail(3)
    node1.appendToTail(1)
    node1.appendToTail(4)
    it "can remove remove duplicates from a linked list", ->
      Chapter2.removeDuplicates(node1)
      result2 = node1.next
      result3 = result2.next
      result4 = result3.next
      expect(result3.data).toBe 3
      expect(result4.data).toBe 4
    it "can do it without extra buffer", ->
      node1.appendToTail(1)
      node1.appendToTail(2)
      node1.appendToTail(5)
      Chapter2.removeDupesWithoutBuffer(node1)
      result2 = node1.next
      result3 = result2.next
      result4 = result3.next
      result5 = result4.next
      expect(result5.data).toBe 5
  describe "FindKthToLast", ->
    it "can find the kth to last element of a singly linked list", ->
      node1 = new Chapter2.Node(1)
      node1.appendToTail(2)
      node1.appendToTail(3)
      node1.appendToTail(4)
      node1.appendToTail(5)
      node1.appendToTail(6)
      expect(Chapter2.findKthToLast(node1, 2).data).toBe 5
      expect(Chapter2.findKthToLast(node1, 4).data).toBe 3
  describe "LumaFibonocci", ->
    it "can pint fibonacci between n and m and moo if power of 2", ->
      result = Chapter2.Fibonacci(6, 200)
      expect(result).toBe "moo 13 21 34 55 89 144 "
