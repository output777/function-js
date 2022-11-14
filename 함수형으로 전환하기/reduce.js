var users = [
  {id: 1, name: 'ID', age: 36},
  {id: 2, name: 'BJ', age: 32},
  {id: 3, name: 'JM', age: 32},
  {id: 4, name: 'PJ', age: 27},
  {id: 5, name: 'HA', age: 25},
  {id: 6, name: 'JE', age: 26},
  {id: 7, name: 'JI', age: 31},
  {id: 8, name: 'MP', age: 23},
];

function _filter(list, predi) {
  var new_list = [];
  _each(list, function (val) {
    if (predi(val)) new_list.push(val);
  });
  return new_list;
}

function _map(list, mapper) {
  var new_list = [];
  _each(list, function (val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

function _each(list, iter) {
  for (var i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}

function _curry(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(a, b);
        };
  };
}

function _curryr(fn) {
  return function (a, b) {
    return arguments.length == 2
      ? fn(a, b)
      : function (b) {
          return fn(b, a);
        };
  };
}

var _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

var add = _curry(function (a, b) {
  return a + b;
});

// _reduce 만들기
var slice = Array.prototype.slice;
function _rest(list, num) {
  return slice.call(list, num || 1);
}

function _reduce(list, iter, memo) {
  if (arguments.length == 2) {
    memo = list[0];
    list = _rest(list);
  }
  _each(list, function (val) {
    memo = iter(memo, val);
  });
  return memo;
}

console.log(_reduce([1, 2, 3, 4], add, 10));
console.log(_reduce([1, 2, 3, 4], add));
