"use strict";

var cekHariKerja = function cekHariKerja(day) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var dataDay = ['senin', 'selesa', 'rabu', 'jumat'];
      var cek = dataDay.find(function (item) {
        return item === day;
      });

      if (cek) {
        resolve(cek);
      } else {
        reject(new Error('Hari ini bukan hari kerja'));
      }
    }, 3000);
  });
}; //fungsi berikut digunakan untuk menjalankan program dari promise


function proces(param1) {
  var result;
  return regeneratorRuntime.async(function proces$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(cekHariKerja(param1));

        case 3:
          result = _context.sent;
          console.log(result);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
          _context.prev = 10;
          console.log("Tetap semangat jalani hari ini :)");
          return _context.finish(10);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7, 10, 13]]);
} //untuk menjalankan fungsi promise diatas. hal yang perlu dilakukan cukup menjalankan fungsi proces 


proces("minggu"); //ketika menggunakan console.log terjadi pending terlebih dahulu untuk menandakan bahwa program sudah jalan akan tetapi belum mengeluarkan hasil karna program bersifat asynchronous

console.log(proces("jumat")); //add commit