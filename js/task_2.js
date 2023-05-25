// Функція приймає два масиви на вхід і повертає один обеднаний масив  (зробити з методами і без)


// перший варіант

// function combinindArray(arr1, arr2) {
//     let res = [...arr1, ...arr2];

//     console.log(res);
// };

// const array1 = ['a', 'b', 'c'];
// const array2 = [1, 2, 4];

// combinindArray(array1, array2);


// другий

// const combinindArray = (arr1, arr2) => [...arr1, ...arr2];

// const array1 = ['a', 'b', 'c'];
// const array2 = [1, 2, 4];

// console.log(combinindArray(array1, array2));


// з методом concat

const combinindArray = (arr1, arr2) => arr1.concat(arr2);

const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 4];

console.log(combinindArray(array1, array2));
