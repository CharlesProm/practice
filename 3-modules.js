//modulo que contiene el llamado de la funcion
const crazy = require('./7-crazy')
const names = require('./4-name')
const sayhi = require(`./5-utils`)
const person = require('./6-flavor')


console.log(person.items);
console.log(person.singlePerson)
sayhi(names.carlos);
sayhi(names.susana);
sayhi('pepe');

