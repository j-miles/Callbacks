// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {

//       found(i);   // execute callback
//     }
//   }
// }

// function actionWhenFound(index) {
//   console.log("Found Waldo at " + index + "!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


function findWaldo(array, found) {
  array.forEach(function (elm,index,array) {
    if (elm === "Waldo") {

      found(index);   // execute callback
    }
  })
}

function actionWhenFound(index) {
  console.log("Found Waldo at " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);