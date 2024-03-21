let arr1 = [3,7,34,90,12];
let lastElement = arr1[arr1.length-1];
console.log({lastElement});

let arr2 = [true,"green","where",12,56];
let findItem = arr2[arr2.length-1];
console.log({findItem});

const myPets = ["cow","Bird","Snake","Dog"];
console.log(myPets.join(""));

let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort());

const arr = ["apple","mango","apple","orange","mango","mango"];
const uniqueArray = [...new Set(arr)];
console.log(uniqueArray);

let arr5 = ["the","way","x",4];
let substr = "way";
let subArr5 = arr5.indexOf(substr);

if (subArr5) {console.log("way")}
else { console.log("the search word was not found")};
