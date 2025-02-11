const givenString = "Hello ban, tui ten Teo, ban cung ten Teo luon ah?";
let individualWords = givenString.replace(/,/gi,"").split(" ");
let individualWords2 = givenString.split(" ");
console.log(individualWords);
console.log(individualWords2);
const groupWords = groupdWords(individualWords);
console.log(groupWords);


// const groupdWords = (individualWords);
/**
 * ****************************
 * and debug buoi 10
 * 3 nut, 2 nut tren dung, nut duoi khong dung
 * nut so 2: co con lady bug
 * nut so 1: dung de chay debug bang file json
 * ****************************
 */
function groupdWords(individualWords) {
    let wordMap = new Map();
    for (const word of individualWords) {
        if (!wordMap.has(word)) {
            wordMap.set(word,1);
        } else {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }
    return wordMap;
}