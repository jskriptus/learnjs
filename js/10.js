let num = 50;

// Длинный вариант из множества условий
// if (num < 49) {
//     console.log('Мало!');
// } else if (num > 100) {
//     console.log('Много!');
// } else {
//     console.log('Верно!');
// }

// Короткий вариант если всего пара условий
// (num == 50) ? console.log('Верно') : console.log('НеВерно');

// Красивый вариант с множеством условий
// Но есть нюанс:
// Всегда нужно ставить break; в конце условия.
// switch (num) {
//     case num < 49:
//         console.log('Неверно');
//         break;
//     case num > 100:
//         console.log('Много!');
//         break;
//     case num > 80: 
//         console.log('Много!');
//         break;
//     case 50:
//         console.log('Верно');
//         break;
//     default:
//         console.log('Что-то пошло не так!');
//         break;
// }