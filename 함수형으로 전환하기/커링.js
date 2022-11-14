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

// 커링은 함수와 인자를 다루는 기법이다.
// 함수에 인자를 하나씩 적용해나가다가 필요한 인자가 모두 채워지면 함수 본체를 실행하는 기법이다.

// 1. _curry, _curryr(curry right: 오른쪽 인자부터 적용하는 curry 함수)
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

var add = _curry(function (a, b) {
  return a + b;
});
var add10 = add(10);
console.log(add10(5));
console.log(add(5)(3));
console.log(add(1, 2));

var sub = _curryr(function (a, b) {
  return a - b;
});
console.log(sub(10, 5));
var sub10 = sub(10);
console.log(sub10(5));

// 2. _get 만들어 좀 더 간단하게 하기
var _get = _curryr(function (obj, key) {
  return obj == null ? undefined : obj[key];
});

var user1 = users[0];
console.log(user1);
console.log(user1.name);
console.log(_get('name')(user1));

var get_name = _get('name');
console.log(get_name(user1));
console.log(get_name(users[3]));
console.log(get_name(users[4]));
// console.log(_get(users[10], 'name'));

console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    _get('name')
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    _get('name')
  )
);
