Chapter1 = require("../chapter1")

describe "Chapter 1", ->
  describe "StringHasAllUniqueCharacters", ->
    it "can tell if a string has all unqiue characters or not", ->
      expect(Chapter1.StringHasAllUniqueCharacters("abcde")).toBe(true)
      expect(Chapter1.StringHasAllUniqueCharacters("accde")).toBe(false)
    it "can do so without a Hash", ->
      expect(Chapter1.UniqueCharactersNoHash("abcde")).toBe(true)
      expect(Chapter1.UniqueCharactersNoHash("accde")).toBe(false)

