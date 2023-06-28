// Написати функцію яка приймає строку-слово в нижнему регестрі і повертаж слово де перша буква в верхнему реестрі 
// upperFirstWord(‘cat’) => ‘Cat’



const upperFirstWord = (str) => str[0].toUpperCase() + str.slice(1);

console.log(upperFirstWord('стрічка'));
