let i = prompt('Скока?');

const isNumber = function (num) {
  !isNaN(parseFloat(num)) && isFinite(num) && num.trim().length>0 ? console.log(true) : console.log(false);
};

isNumber(i);