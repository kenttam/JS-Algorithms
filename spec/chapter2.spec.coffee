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
  describe "DeleteNode", ->
    it "can delete a node", ->
      nodeA = new Chapter2.Node("a")
      nodeA.appendToTail("b")
      nodeA.appendToTail("c")
      nodeA.appendToTail("d")
      nodeA.appendToTail("e")
      Chapter2.deleteNode(nodeA, "c")
      resultB = nodeA.next
      resultD = resultB.next
      expect(resultD.data).toBe "d"
  describe "PartitionList", ->
    it "can partition a list by a value", ->
      node1 = new Chapter2.Node(1)
      node1.appendToTail(10)
      node1.appendToTail(100)
      node1.appendToTail(50)
      node1.appendToTail(20)
      node1.appendToTail(120)
      # 1, 10 ,20, 50, 100, 120 
      result = Chapter2.partitionList(node1, 51)
      expect(result.data).toBeLessThan(51)
      expect(result.next.data).toBeLessThan(51)
      expect(result.next.next.data).toBeLessThan(51)
      expect(result.next.next.next.data).toBeLessThan(51)
      expect(result.next.next.next.next.data).toBeGreaterThan(51)
 describe "LinkedListAddition", ->
   it "can add two lists that are represented by linked list", ->
     node617 = new Chapter2.Node(7)
     node617.appendToTail(1)
     node617.appendToTail(6)
     node295 = new Chapter2.Node(5)
     node295.appendToTail(9)
     node295.appendToTail(2)
     result = Chapter2.LinkedListAddition(node617, node295)
     expect(result.data).toBe 2
     expect(result.next.data).toBe 1
     expect(result.next.next.data).toBe 9
 describe "FindBeginningOfLoop", ->
   it "can find the beginning node of a looping linked list", ->
     node = new Chapter2.Node("A")
     node.appendToTail("B")
     node.appendToTail("C")
     node.appendToTail("D")
     node.appendToTail("E")
     node.next.next.next.next.next = node.next.next
     result = Chapter2.FindBeginningOfLoop(node)
     expect(result.data).toBe "C"
