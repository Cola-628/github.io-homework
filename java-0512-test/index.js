let myData = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let myArray = myData.split(",");
myArray.pop();
myArray.unshift("Edinburgh");
console.log(myArray);
