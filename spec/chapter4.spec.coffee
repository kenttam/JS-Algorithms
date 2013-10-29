Chapter4 = require("../chapter4")

describe "Chapter 4", ->
  describe "IsBalanced", ->
   it "can tell if a tree is balanced", ->
     tree = new Chapter4.Tree("A")
     expect(Chapter4.isBalanced(tree)).toBe true
     tree.left = new Chapter4.Tree("B")
     tree.right = new Chapter4.Tree("C")
     expect(Chapter4.isBalanced(tree)).toBe true
     tree.left.left = new Chapter4.Tree("D")
     tree.left.left.left = new Chapter4.Tree("E")
     expect(Chapter4.isBalanced(tree)).toBe false
  describe "HasRoute", ->
    it "can tell if two nodes are connected", ->
      a = new Chapter4.Node("A")
      b = new Chapter4.Node("B")
      c = new Chapter4.Node("C")
      d = new Chapter4.Node("D")
      e = new Chapter4.Node("E")
      Chapter4.connectNodes(a, b)
      Chapter4.connectNodes(a, c)
      Chapter4.connectNodes(d, c)
      expect(Chapter4.isConnected(a, b)).toBe true
      expect(Chapter4.isConnected(a, e)).toBe false
