const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("should return a string reverse"), () => {
      const str = "Hello World";
      const rev = "dlroW olleH";
      expect(str).toEqual(rev);
    }
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should return a palindrome string"), () => {
      const str = "racecar";
      const palindrome = new Algo().isPalindrome(str);
      expect(palindrome).toEqual(true);
    }
  
    it("should return false if string isn't a palindrome", () => {
      const str = "neon";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(false);
    });
  });
  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("should return capitalize string"), () => {
      const str = "abc";
      expect(str).toEqual(str[0].toUpperCase());
    }
  });
});
