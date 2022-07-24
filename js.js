// let nums = [-1.23, 13, 14.52, -33.53, 30];

// let max = Math.max(...nums);
// let min = Math.min(...nums);

// max = Math.floor(max);
// min = Math.floor(min);

// max = Math.abs(max);
// min = Math.abs(min);

// let avg = (max + min) / 2;

// console.log(avg);

// console.log(Math.floor(Math.random() * 100));


// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [1, 2, 3, 4];

// console.log(numbers1.splice(1, 2));
// console.log(numbers2.splice(2, 1,"77"));




// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

// // for(let num = i; i < numbers.length; i++){
// //     console.log(numbers[i]);
// // }

// // for(let tru = i; i < fruits.length; i++){
// //     console.log(fruits[i]);
// // }

// numbers.forEach(function(item, index, array){
//     console.log(item, index, array);
// })

// // fruits.forEach(function(iam, love, you){
// //     console.log(iam, love, you);
// // })



// //화살표 함수
// fruits.forEach((iam, love, you) =>{
//     console.log(iam, love, you);
// })


// let numbers = [];

// for(let i = 0; i<=100; i++){
//     numbers.push(1);
// }

// console.log(numbers);

// let map2 = Number.map(()=> item);

// console.log(fore);

// const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];

// let obj = fruits.map(function(item, index){
//     return{
//         id: index+1 ,
//         name : item,
//     }
// })

// console.log(obj);


// let numbers = [1, 2, 3, 4, 5, 6];

// let reduce = number.reduce(function(sum, item, index, arr){
//     console.log(sum, item, index, arr);
//     return sum + item;
// })

// let numbers = []

// for(let num = i; i <=100; i++){
//     numbers.push(i);
// }


// let reduce = number.reduce(function(sum, item){
//     return sum + item;
// })

// console.log(reduce);

// let str = "apple";

// [...str].forEach(function(item, index, array){
//     console.log(item, index, array);
// })


// let numbers = [1, 2, 3, 4, 5, 6];
// let arr;
// arr = numbers.filter((num) => num > 3);
// console.log(arr);
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);



// let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
// let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// let same = [];
// let diff = [];

// same = fruits1.filter((item)=>fruits2.includes(item));

// fruits1.forEach(function(item){
//     if(fruits2.includes(item)){
//         same.push(item);
//     }
// })


// let numbers = [1, 2, 3, 4, 5, 6];
// let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];
// fruits.forEach(function (number, index, array) {
//   console.log(number, index, array);
// });

const fruits = ["사과", "파인애플", "수박", "포도", "오렌지"];
let obj = fruits.map((a, b) => ({
 id: b,
 name: a,
}))
console.log(obj);
