
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
