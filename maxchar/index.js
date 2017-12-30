// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
/*jshint esversion: 6 */
function maxChar(str) {
    //create an empty object
    const charMap = {};
    //add items to object
    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] =1;
        }
    }
    let maxOccur = 0;
    let maxChar = "";
    //iterate through object to find max occurances
    for(let char in charMap){
        if(charMap[char] > maxOccur){
            maxOccur = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
module.exports = maxChar;
