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

// ** 1. 명령형 코드
//[1] 30세 이상인 users를 거른다.
var temp_users = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age >= 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// [2] 30세 이상인 users의 names를 수집한다.
var names = [];
for (var i = 0; i < temp_users.length; i++) {
  names.push(temp_users[i].name);
}
console.log(names);

// [3] 30세 미만인 users를 거른다.
var temp_users = [];
for (var i = 0; i < users.length; i++) {
  if (users[i].age < 30) {
    temp_users.push(users[i]);
  }
}
console.log(temp_users);

// [4] 30세 미만인 users의 ages를 수집한다.
var ages = [];
for (var i = 0; i < temp_users.length; i++) {
  ages.push(temp_users[i].age);
}
console.log(ages);

// ** 2. _filter, _map으로 리팩토링
// _filter같은 함수를 응용형 함수, 고차 함수라고 부름
// 응용형 함수: 함수가 함수를 받아서 원하는 시점에 해당하는 함수가 알고있는 인자를 적용하는 식으로 프로그래밍하는 것이다.
// 고차함수: 함수를 인자로 받거나 함수를 return하거나 함수 안에서 인자로 받은 함수를 실행하는 함수를 고차함수라고 한다.
function _filter(users, predi) {
  var new_list = [];
  for (var i = 0; i < users.length; i++) {
    // 함수형 프로그래밍에서는 중복을 제거하거나, 어떤 부분들을 추상화 할때 함수를 사용하면 된다.
    // 추상화의 단위가 객체, 메서드, 클래스가 아니라 함수를 이용해서 프로그래밍하는 것이 함수형 프로그래밍이다.
    if (predi(users[i])) {
      new_list.push(users[i]);
    }
  }
  return new_list; // console.log도 부수효과여서 return 값으로 변경하는 방식으로 코드를 고침
}

function _map(list, mapper) {
  var new_list = [];
  for (var i = 0; i < list.length; i++) {
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

var over_30 = _filter(users, function (user) {
  return user.age >= 30;
});
console.log('over_30', over_30);

var names = _map(over_30, function (user) {
  return user.name;
});
console.log('names', names);

var under_30 = _filter(users, function (user) {
  return user.age < 30;
});
console.log('under_30', under_30);

var ages = _map(under_30, function (user) {
  return user.age;
});
console.log('ages', ages);

console.log(
  _filter(users, function (user) {
    return user.age < 30;
  })
);

/*
console.log(
  _filter([1, 2, 3, 4], function (num) {
    return num % 2;
  })
);
console.log(
  _filter([1, 2, 3, 4], function (num) {
    return !(num % 2);
  })
);

console.log(
  _map([1, 2, 3], function (num) {
    return num * 2;
  })
);
*/

// 대인문??
console.log(
  _map(
    _filter(users, function (user) {
      return user.age >= 30;
    }),
    function (user) {
      return user.name;
    }
  )
);

console.log(
  _map(
    _filter(users, function (user) {
      return user.age < 30;
    }),
    function (user) {
      return user.name;
    }
  )
);
