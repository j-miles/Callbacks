var words = ["ground", "control", "to", "major", "tom"];

function map(array,callBack) {
  var returnArray = [];
  array.forEach(function(elm) {
    returnArray.push(callBack(elm));
  })
  return returnArray;
};

output = map(words, function(word) {
  return word.length;
});

console.log(output);