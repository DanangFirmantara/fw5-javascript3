"use strict";

var getmonth = function getmonth(callback) {
  setTimeout(function () {
    var error = false;
    var month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'December'];

    if (!error) {
      callback(null, month);
    } else {
      callback(new Error('Sorry Data Not Found', []));
    }
  }, 4000);
};

function map(param1, param2) {
  param2.map(function (element) {
    console.log(element);
  });
}

getmonth(map);