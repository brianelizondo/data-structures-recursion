/** product: calculate the product of an array of numbers. */
function product(arr) {
    if (arr.length === 0) return 1;
    return arr[0] * product(arr.slice(1));
}

/** longest: return the length of the longest word in an array of words. */
function longest(words, idx = 0, longestValue = 0) {
    if(words.length === idx) return longestValue;
    longestValue = Math.max(words[idx].length, longestValue);
    return longest(words, idx + 1, longestValue);
}

/** everyOther: return a string with every other letter. */
function everyOther(str, idx = 0, characters = ""){
    if(idx >= str.length) return characters;
    characters += str[idx];
    return everyOther(str, idx + 2, characters);
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str, idx = 0, reverseStr = "", palindrome = false){
    if(idx >= str.length) return palindrome;
    reverseStr = str[idx] + reverseStr;
    palindrome = str === reverseStr ? true : false;
    return isPalindrome(str, idx + 1, reverseStr, palindrome);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, idx = 0){
    if(arr[idx] === val){
        return idx;
    }else if (idx === (arr.length - 1)){
        return -1;
    };

    return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */
function revString(str, idx = 0, reverseStr = ""){
    if(idx >= str.length) return reverseStr;
    reverseStr = str[idx] + reverseStr;
    return revString(str, idx + 1, reverseStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj){
    let arrStrings = [];
    for (let key in obj){
        if(typeof obj[key] === 'string'){
            arrStrings.push(obj[key]);
        }
        if(typeof obj[key] === 'object'){
            arrStrings.push(...gatherStrings(obj[key]));
        }
    }
    return arrStrings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, leftIdx = 0, rightIdx = (arr.length - 1)){
    if(leftIdx > rightIdx) return -1;
    
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
        return binarySearch(arr, val, middleIdx + 1, rightIdx);
    } else if (middleVal > val) {
        return binarySearch(arr, val, leftIdx, middleIdx - 1);
    } else {
        return middleIdx;
    }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
