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

// 외부 다형성
// 1. array_like, arguments, document.querySelectorAll

/**
 * map, filter는 method이기 떄문에 순수함수가 아니고, 객체의 상태에 따라 결과가 달라지는 특징이 있다.
 * 그리고 메서드는 객체 지향 프로그래밍이다.
 * 메서드의 특징은 해당 클래스에 정의되기 때문에 해당 클래스의 인스턴스에서만 사용할 수 있다.
 * 즉 map은 array에서만 사용할 수 있다는 것이다.
 */
console.log(
  [1, 2, 3, 4].map(function (val) {
    return val * 2;
  })
);
console.log(
  [1, 2, 3, 4].filter(function (val) {
    return val % 2;
  })
);
// console.log(document.querySelectorAll('*'));
// console.log(
//   _map(document.querySelectorAll('*'), function (node) {
//     return node.nodeName;
//   })
// );

// 내부 다형성
// 1. predicate, iter, mapper
console.log(
  _map([1, 2, 3, 4], function (val) {
    return val + 10;
  })
);
