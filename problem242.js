/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) { // The plan is to split one or both of the inputs into arrays, from there I can loop through the string and take out any matching letters from the array with by using indexOf(). If array is empty that likely means the word is an anagram, I can double check this by doing this process price but for the other word (example, I turn var t into an array to check it and then later turn var s into an array to check it against t)
    if (s.length != t.length) {
        return false;
    }
    let tDuplicate = t;

    for (let i = 0; i < s.length; i++) {
        let currLetter = s[i];
        tDuplicate = tDuplicate.replace(currLetter, "");
    }
    return tDuplicate === "";
    // This solution did not pass all test cases, the solution is to make a s duplicate and run the same logic against it with t.
};