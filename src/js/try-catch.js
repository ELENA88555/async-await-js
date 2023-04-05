'use strict';

/*
 * try/catch
 * Помилки фази інтерпретації обробити не можна, лише помилки фази виконання
 * Об'єкт помилки
 * try/catch працює ЛИШЕ з синхронним кодом
 * Обробка помилок в асинхронному коді
 */

console.log(1);

setTimeout(() => {
  try {
    const number = 5;

    number = 10;

    console.log(number);
  } catch (err) {
    console.warn(err);
  }
}, 500);

console.log(2);
