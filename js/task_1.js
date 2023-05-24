// Зроби функцію яка приймає строку і повертає розвернуту строку
// тобто changeString(‘abcd’) => ‘dcba’

function changeString(str) {

    // return console.log(str.split('').reverse().join('')); 
    let res = '';

    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }


    console.log(res)

};

changeString('stre');