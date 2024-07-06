let password;
let attempts = 5;

do {
    for (let i = 0; i < attempts; i++) {
        password = +prompt('Введите пароль:');
        if (password === 1234) {
            alert('Пароль верный');
           
        } else if (i < attempts - 1) {
            alert('Неправильный пароль. Осталось попыток: ' + (attempts - i - 1));
        }
    }
    if (password !== 1234) {
        alert('Попыток не осталось');
    }
} while (password !== 1234);