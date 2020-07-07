'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 }
];

users.sort((a, b) => {
  if (a.name < b.name) {
      return -1;
  } else {
      return 1;
  }
});
console.log(users);

users.sort ((a,b) => a.pin - b.pin);
console.log(users);