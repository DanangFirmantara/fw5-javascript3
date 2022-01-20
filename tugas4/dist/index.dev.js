"use strict";

var fetch = require('cross-fetch');

url = 'https://jsonplaceholder.typicode.com/users'; //menggunakan asyn await

function listName() {
  var data, result;
  return regeneratorRuntime.async(function listName$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          data = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(data.json());

        case 5:
          result = _context.sent;
          result.forEach(function (item) {
            console.log(item.name);
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
} //menggunakan try and catch
// result = fetch(url).then(res =>{
//     res.json().then(fin =>{
//         fin.forEach(Element =>{
//             console.log(Element.name)
//         })
//     }).catch(res =>{
//         console.log("catch 1")
//     })
// }).catch(err =>{
//     console.log("catch 2")
// })


listName();