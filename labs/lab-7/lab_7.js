/**
 * ****************************
 * **
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 *Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
    The program need to allow user to input a sentence, not hard code (optional)
 *****************************
 */ 

const readline = require('readline-sync');
const givenString = readline.question("Please enter a sentence: ");
// const givenString = "Hello ban, tui ten Teo, ban cung cung ten Teo luon ah 1 1 1 ?";
const individualWords = givenString.replace(/[^\d\w\s]/gi,"").trim().split(" ");
// handle word and mapping it to object
const groupWords = groupdWords(individualWords);
// print word as key and value
printresult(groupWords);
// define wordObj with key is word and value is number of word

function groupdWords(individualWords) {
    let wordObj = {};
    for (const word of individualWords) {
        if (!(word in wordObj)) {
            // if do not find the word in wordObj, add the word to wordObj with value is 1
            wordObj[word] = 1;
        } else {
            // call value of word in wordObj and increase 1
            wordObj[word] ++;
        }
    }
    return wordObj;
}
function printresult(groupWords) {
    for (const word in groupWords) {
        console.log(`\t ${word}: ${groupWords[word]} \n`);
    }
}




