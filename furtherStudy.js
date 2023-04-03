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
  //console.log(output);
  let firstLetterToWords = {};
  //console.log(firstLetterToWords);
  for (const name of names){
    //console.log(name);
    if (!firstLetterToWords[name[0]]){
      firstLetterToWords[name[0]] = [name];
    }
    else{
      firstLetterToWords[name[0]].push(name)
    }
  }
  //console.log(firstLetterToWords);
  while (true){
    let prevWord = output[(output.length-1)];
    //console.log(prevWord);
    //if (!prevWord)
    //console.log(output);
    //console.log(firstLetterToWords);
    let startLetter = prevWord[prevWord.length-1];
    //console.log(startLetter);

    if (!firstLetterToWords[startLetter] || firstLetterToWords[startLetter].length === 0){
      break; 
    }
    //names =["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]

    let word = firstLetterToWords[startLetter].shift();
    output.push(word); 
  }
  return output; 
}
