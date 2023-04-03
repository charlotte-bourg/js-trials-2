'use strict';

// 1. printIndices
function printIndices(items) {
  for (let i = 0; i < items.length; i += 1) {
    console.log(`${items[i]} ${i}`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (let i = 0; i < items.length; i += 1){
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b);
  let sortedNItems = sortedItems.slice(0, n);
  sortedNItems.reverse(); 
  console.log(sortedNItems);
}
