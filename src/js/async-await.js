'use strict';
////


/*
 * async/await
 * асинхронна (async) функція Завжди повертає проміс.
 * await змушує функцію чекати виконання промісу.
 * await не можна використовувати поза асинхронними функціями.
 * try/catch для відлову помилок
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// const fetchUsers = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/usdadasders`);

//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return await response.json();
//   } catch {
//     throw new Error();
//   }
// };

// fetchUsers().then(console.log).catch(console.log);

// (async () => {
//   try {
//     console.log(await fetchUsers());
//   } catch (err) {
//     console.log(err);
//   }
// })();

// .then(console.log).catch(console.log);

// const greetUser = async username => {
//   return username;
// };

// console.log(1);

// greetUser('Olya').then(data => {
//   console.log(data);
// });

// console.log(2);

// const sum = async (a, b) => {
//   return await Promise.resolve(a + b);
// };

// sum(10, 20).then(console.log);

//? TASK 01
// Перепиши функцію на синтаксис async/await

// const loadPosts = url => {
//   return fetch(url).then(postsResponse => {
//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return postsResponse.json();
//   });
// };

// loadPosts(`${BASE_URL}/posts`)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// const loadPosts = async url => {
//   try {
//     const postsResponse = await fetch(url);

//     if (!postsResponse.ok) {
//       throw new Error(postsResponse.status);
//     }

//     return await postsResponse.json();
//   } catch (err) {
//     throw new Error(err.status);
//   }
// };

// const asyncFunc = async () => {
//   try {
//     console.log(await loadPosts(`${BASE_URL}/posts`));
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log(`Finally!`);
//   }
// };

// asyncFunc();

// (async () => {
//   try {
//     console.log(await loadPosts(`${BASE_URL}/posts`));
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log(`Finally!`);
//   }
// })();

//? TASK 02
// Є «звичайна» функція. Як можна всередині неї отримати результат виконання async–функції?

async function wait() {
  await new Promise((resolve, reject) => setTimeout(reject, 1000, `Ooops`));

  return 10;
}

// async function func() {
//   try {
//     const number = await wait();

//     console.log(number);
//   } catch (err) {
//     console.log(err);
//   }

//   // ...що тут написати?
//   // щоб викликати wait() та дочекатися результату "10" від async–функції
//   // не забывайте, здесь нельзя использовать "await"
// }

// (async () => {
//   try {
//     const number = await wait();

//     console.log(number);
//   } catch (err) {
//     console.log(err);
//   }
// })();
