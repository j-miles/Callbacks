// var numbers = [10, 2, 5, 1, 9];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

var students = [
  { id: 1, a: "bruce",    age: 40 },
  { id: 2, a: "zoidberg", age: 22 },
  { id: 3, a: "alex",     age: 22 },
  { id: 4, a: "alex",     age: 30 }
];


students.sort(function(a,b){
  var nameA = a.name
  var nameB = b.name
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA == nameB) {
    students.sort(function(a,b) {
      return nameA.age = nameB.age;
    })
    return 1
  }
});
console.log(students);