// Написати функцію яка приймає строку-слово в нижнему регестрі і повертаж слово де перша буква в верхнему реестрі 
// upperFirstWord(‘cat’) => ‘Cat’

function upperFirstWord(str) {
    console.log(str);
    let newStr = str[0].toUpperCase() + str.slice(1);
    console.log(newStr)
    return newStr;
};

upperFirstWord('стрічка');

