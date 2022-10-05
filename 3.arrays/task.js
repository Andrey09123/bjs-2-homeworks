function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  return (arr1.length === arr2.length) && (arr1.every((val,idx) => val === arr2[idx]));
  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  return arr.filter(val => val > 0).filter(val => val % 3 === 0).map(val => val * 10);
  return resultArr; // array
}
