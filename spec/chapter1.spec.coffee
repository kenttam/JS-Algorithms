Chapter1 = require("../chapter1")

describe "Chapter 1", ->
  describe "StringHasAllUniqueCharacters", ->
    it "can tell if a string has all unqiue characters or not", ->
      expect(Chapter1.StringHasAllUniqueCharacters("abcde")).toBe(true)
      expect(Chapter1.StringHasAllUniqueCharacters("accde")).toBe(false)
    it "can do so without a Hash", ->
      expect(Chapter1.UniqueCharactersNoHash("abcde")).toBe(true)
      expect(Chapter1.UniqueCharactersNoHash("accde")).toBe(false)
  describe "ReverseString", ->
    it "can reverse a string", ->
      expect(Chapter1.ReverseString("abcde")).toBe "edcba"
  describe "IsPermutation", ->
    it "can tell if two string is a permutation of one another", ->
      expect(Chapter1.IsPermutation("abcde", "edbca")).toBe true
      expect(Chapter1.IsPermutation("abccde", "edbca")).toBe false
      expect(Chapter1.IsPermutation("abrde", "edbca")).toBe false
      expect(Chapter1.IsPermutation2("abcde", "edbca")).toBe true
      expect(Chapter1.IsPermutation2("abccde", "edbca")).toBe false
      expect(Chapter1.IsPermutation2("abrde", "edbca")).toBe false
  describe "ReplaceSpace", ->
    it "can replace all spaces in a string with %20", ->
      expect(Chapter1.ReplaceSpace("Mr John Smith")).toBe "Mr%20John%20Smith"
  describe "StringCompression", ->
    it "can perform basic string compression using the counts of repeated characters", ->
      expect(Chapter1.StringCompression("aabcccccaaa")).toBe "a2b1c5a3"
      expect(Chapter1.StringCompression("aabb")).toBe "aabb"
  describe "RotateMatrix", ->
    it "has a helper function that would swap four coordinates in 90 degree manner", ->
      originalMatrix = [[1,2],[4,3]]
      expectedMatrix = [[4,1],[3,2]]
      resultMatrix = Chapter1.SwapTheFourCoordinates(originalMatrix, 0, 0)
      expect(resultMatrix[0][0]).toBe expectedMatrix[0][0]
      expect(resultMatrix[0][1]).toBe expectedMatrix[0][1]
      expect(resultMatrix[1][0]).toBe expectedMatrix[1][0]
      expect(resultMatrix[1][1]).toBe expectedMatrix[1][1]
    it "can rotate an NxN Matrix (2D array) by 90 degrees)", ->
      originalMatrix = [[1,2,3],[4,5,6],[7,8,9]]
      expectedMatrix = [[7,4,1],[8,5,2],[9,6,3]]
      resultMatrix = Chapter1.RotateMatrix(originalMatrix)
      expect(resultMatrix[0][0]).toBe expectedMatrix[0][0]
      expect(resultMatrix[0][1]).toBe expectedMatrix[0][1]
      expect(resultMatrix[0][2]).toBe expectedMatrix[0][2]
  describe "ZeroOut", ->
    it "can find all zeroes and change the entire row and column of the matrix to zeroes", ->
      originalMatrix = [[1, 2, 0], [4, 5, 6], [7, 8, 0]]
      expectedMatrix = [[0, 0 ,0], [4, 5, 0], [0, 0, 0]]
      resultMatrix = Chapter1.ZeroOut(originalMatrix)
      expect(resultMatrix[0][0]).toBe expectedMatrix[0][0]
      expect(resultMatrix[0][1]).toBe expectedMatrix[0][1]
      expect(resultMatrix[0][2]).toBe expectedMatrix[0][2]
      expect(resultMatrix[1][0]).toBe expectedMatrix[1][0]
      expect(resultMatrix[1][1]).toBe expectedMatrix[1][1]
      expect(resultMatrix[1][2]).toBe expectedMatrix[1][2]

