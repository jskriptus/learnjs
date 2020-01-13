//          ------------------------------
//          ********    ОБЬЕКТЫ  **********
//          ------------------------------

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test'
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: 'black',
//     background: 'red'
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);

// //          ------------------------------
// //          ********    МАСИВЫ  **********
// //          ------------------------------

// let arr = [1, 2, 3, 4, 5];

// // arr.pop(); // pop() - удаляет из масива последний элемент
// // arr.push(5); // push() - добавляет в конец масива новый элемент
// // arr.shift(); // shift() - удаляет из масива первый элемент
// // arr.unshift(1); // unshift() - добавляет в начало масива новый элемент

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function (item, i, mass) {
//     console.log(i + ' имеет позицию ' + item + ' в масиве ' + mass);
// });

// console.log(arr);

// let mass = [1, 2, 3, 4, 5];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt('', ''),
//     arr = [];
// arr = ans.split(',');
// console.log(arr);

// let arr = ['aaaw', 'sadew', 'sesese', 'sadasd'],
//     i = arr.join(', ');
// console.log(i);

let arr = [1, 15, 5],
     i = arr.sort(compareNum);

function compareNum(a, b) {
    return a-b;
}

console.log(i);


