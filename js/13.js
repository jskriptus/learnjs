function learnJS (lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}

// learn25('JS', function() {
//     console.log('Я прошел третий урок')
// });

function done () {
    console.log('Я прошел третий урок!');
}

learnJS('JS', done);