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


