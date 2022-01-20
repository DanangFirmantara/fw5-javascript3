"use strict";

var pesanKopi = function pesanKopi(order) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var kopi = ['Kopi Susu', 'Cappucino', 'Coffe Latte', 'Americano'];
      var cek = kopi.find(function (item) {
        return item == order;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("".concat(order, " tidak ada di dalam menu. Menu yang tersedia ").concat(kopi, " ")));
      }
    }, 2000);
  });
};

function proces(param1) {
  var result;
  return regeneratorRuntime.async(function proces$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(pesanKopi(param1));

        case 3:
          result = _context.sent;
          console.log("".concat(result, " akan diantar ya kakak"));
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
          _context.prev = 10;
          console.log("Terima kasih sudah berkunjung :)");
          return _context.finish(10);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7, 10, 13]]);
}

proces("Americano");
proces("Leci");

var daftarToko = function daftarToko(toko) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var namaToko = ['Minang Mart', 'Budiman', 'Aciak Mart', 'Bundo Mart'];
      var cek = namaToko.find(function (item) {
        return item == toko;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject(namaToko);
      }
    }, 5000);
  });
};

function proces2(param1) {
  var result;
  return regeneratorRuntime.async(function proces2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(daftarToko(param1));

        case 3:
          result = _context2.sent;
          console.log("".concat(result, " sudah masuk dalam daftar"));
          _context2.next = 12;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log("".concat(param1, " belum masuk dalam daftar"));

          _context2.t0.push(param1);

          console.log("".concat(_context2.t0, ". Data ").concat(param1, " telah dimasukkan"));

        case 12:
          _context2.prev = 12;
          console.log("Terima kasih");
          return _context2.finish(12);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7, 12, 15]]);
}

proces2("Nambo");