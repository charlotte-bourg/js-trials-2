'use strict';

// 1. countWords
function countWords(phrase) {
  const word_counts = {};
  for (const word of phrase.split(" ")){
    if (word_counts[word]){
      word_counts[word]++;
    }
    else{
      word_counts[word] = 1;
    }
  }
  return word_counts; 

}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };
  if (!melonPrices.hasOwnProperty(price)){
    return; 
  }
  return melonPrices[price].sort();
}