let money = prompt('Ваш бюджет в месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses  : {},
    income : [],
    savings : false
};

let a = prompt('Введите обязательную статью расходов в этом месяце', '');
let b = prompt('Во сколько обойдется?', '');

appData.expenses[0] = a;
appData.expenses[1] = b;

console.log(alert(appData.budget / 30));