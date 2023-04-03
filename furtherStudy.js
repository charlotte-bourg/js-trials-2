'use strict';

function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  let result = new Set(); 

  for (const word of words1Set){
    if (words2Set.has(word)){
      result.add(word);
    }
  }
  return result; 
}

function kidsGame(names) {
  let output = [];
  output.push(names.shift());
  let firstLetterToWords = {};
  for (const name of names){
    if (!firstLetterToWords[name[0]]){
      firstLetterToWords[name[0]] = [name];
    }
    else{
      firstLetterToWords[name[0]].push(name)
    }
  }
  while (true){
    let prevWord = output[(output.length-1)];
    let startLetter = prevWord[prevWord.length-1];

    if (!firstLetterToWords[startLetter] || firstLetterToWords[startLetter].length === 0){
      break; 
    }
    let word = firstLetterToWords[startLetter].shift();
    output.push(word); 
  }
  return output; 
}
