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
  describe "Make binary search tree", ->
    it "is a valid BST with minimal height", ->
      values = [1, 2, 3, 4, 5, 6, 7]
      tree = Chapter4.makeBST(values)
      expect(tree.data > tree.left.data).toBe true
      expect(tree.data < tree.right.data).toBe true
      expect(tree.left.left.left).toBe null
      expect(tree.right.right.right).toBe null
  describe "MakeLinkList", ->
    it "can create a linked list for each depth of a binary tree", ->
      values = [1, 2, 3, 4, 5, 6, 7]
      tree = Chapter4.makeBST(values)
      list = Chapter4.makeLinkedList(tree)
      expect(list[0].data).toBe 4
      expect([list[1].data, list[1].next.data] ).toContain(2)
      expect([list[1].data, list[1].next.data] ).toContain(6)
  describe "IsBST", ->
    it "can tell if a tree is a BST", ->
      values = [1, 2, 3, 4, 5, 6, 7]
      tree = Chapter4.makeBST(values)
      expect(Chapter4.isBST(tree)).toBe true
      tree.left.left.data = 5
      expect(Chapter4.isBST(tree)).toBe false
      notBST = Chapter4.Tree(20)
      notBST.left = Chapter4.Tree(10)
      notBST.left.right = Chapter4.Tree(25)
      notBST.right = Chapter4.Tree(30)
      expect(Chapter4.isBST(notBST)).toBe false
  describe "findSum", ->
    it "can find the any paths that add to a given sum", ->
      tree = new Chapter4.Tree(1)
      tree.right = new Chapter4.Tree(3)
      tree.right.right = new Chapter4.Tree(7)
      tree.right.left = new Chapter4.Tree(6)
      list = Chapter4.findSumPath(tree, 10)
      expect(list.length).toBe 2
      first_sum = 0
      for element in list[0]
        first_sum += element
      expect(first_sum).toBe 10
      second_sum = 0
      for element in list[1]
        second_sum += element
      expect(second_sum).toBe 10
