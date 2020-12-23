
/**
 * For a given target string, determine if you can create that string using words in a wordbank.
 * Return true if you can create the value from the given words, else return false.
 * The words can be used as many times as needed.
 * 
 * An empty string will be our base case as we can return true if we get to this.
 * That is becase an empty string can be made from 0 words in the wordbank.
 * 
 * We must determine if a word in the wordbank is the prefix of the target.
 */

/**
 * m is the number of chars in the targetString
 * n is number of elements in wordBank
 * 
 * Brute Force:
 *   - Time complexity: O(n^m * m) -> ((branching levels ^ height of the tree) *  targetSubstring creation)
 *   - Space complexity: O(m * m) or O(m^2) -> number of calls in the call stack * number of new substrings created.
 */
function canConstruct(target: string, wordBank: string[]): boolean {
  if(target === '') return true;
  for(let word of wordBank){
    if(target.startsWith(word)){
      const remainingWord = target.substr(word.length);
      if(canConstruct(remainingWord, wordBank)) return true;
    } 
  }
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));  // true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));  // false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  // true
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee']));  // false // Too expensive to call.

/**
 * m is the number of chars in the targetString
 * n is number of elements in wordBank
 * 
 * Memoized:
 *   - Time complexity: O(n * (m^2)) -> m^2 due to the cost of the string slice
 *   - Space complexity: O(m^2)
 */
function canConstructMemoized(target: string, wordBank: string[], memo: {[key: string]: boolean} = {}): boolean {
  if(target in memo) return memo[target];
  if(target === '') return true;
  for(let word of wordBank){
    if(target.startsWith(word)){
      const remainingWord = target.substr(word.length);
      if(canConstructMemoized(remainingWord, wordBank, memo)){ 
          memo[target] = true;
          return true;
      }
    } 
  }
  memo[target] = false;
  return false;
}

console.log("---");
console.log(canConstructMemoized("abcdef", ["ab", "abc", "cd", "def", "abcd"]));  // true
console.log(canConstructMemoized("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));  // false
console.log(canConstructMemoized("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));  // true
console.log(canConstructMemoized("eeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee']));  // false // Too expensive to call.
