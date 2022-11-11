/**
 * 순수 함수 : 부수효과가 없는 함수, 동일한 인자를 주면 동일한 결과를 만드는 함수
 * 부수효과: 함수가 return 값으로 결과를 만드는 것 외에 외부의 상태에 영향을 미치는 것
 *
 * 함수형 프로그래밍에서는 값을 변형해나가거나 값을 다룰때 초기값을 건들지 않고 (모든 값들에 대해 변화를 일으키지 않고) 외부의 상태를 변화시키지 않으면서
 * 또 인자로 받은 값을 직접 변경시키지 않으면서 값을 다뤄나가는 프로그래밍이다.
 *
 * 순수 함수가 아니면 평가 시점이 중요하다. 왜냐하면 평가시점에 따라 값이 변경될 수 있기 때문이다.
 * 하지만 순수 함수는 평가시점이 중요하지 않다. 왜냐하면 동일한 인자를 주면 동일한 결과를 만드는 함수이기 때문이다.
 *
 */

// 순수함수
function add(a, b) {
  return a + b;
}

console.log(add(10, 5));
console.log(add(10, 5));
console.log(add(10, 5));

// 순수함수가 아닌 경우
var c = 10; // c가 상수라면 순수함수지만 상수가 아니면 순수함수가 아니다. 동일한 인자를 주면 항상 동일한 결과를 만들지 못하기 때문이다.
function add2(a, b) {
  return a + b + c;
}

console.log(add2(10, 5));
c = 20;
console.log(add2(10, 5));
console.log(add2(10, 5));

var c = 20;
function add3(a, b) {
  c = b;
  return a + b;
}
console.log('c: ', c);
console.log(add3(10, 5));
console.log('c: ', c); // c의 값이 변경되면서 외부의 상태에 영향을 주기 때문에(부수효과가 있기때문에) add3도 순수함수가 아니다.

var obj1 = {val: 10};
function add4(obj, b) {
  obj.val += b;
}
console.log(obj1.val);
add4(obj1, 20);
console.log(obj1.val); // obj1의 val값이 변경되면서 외부의 상태에 영향을 주기 때문에(부수효과가 있기때문에) add4도 순수함수가 아니다. 그리고 return도 없다.

// 다시 순수 함수

// add4와 같은 기능을 하는 순수함수
var obj1 = {val: 10};
function add5(obj, b) {
  return {val: obj.val + b};
}
console.log(obj1.val);
var obj2 = add5(obj1, 20);
console.log(obj1.val);
console.log(obj2.val);

/* 일급 함수 */
var f1 = function (a) {
  return a * a;
};
console.log(f1);

var f2 = add;
console.log(f2);

function f3(f) {
  return f();
}
console.log(
  f3(function () {
    return 10;
  })
);
console.log(
  f3(function () {
    return 20;
  })
);

function f4(f1, f2, f3) {
  return f3(f1() + f2());
}

console.log(
  f4(
    function () {
      return 2;
    },
    function () {
      return 1;
    },
    function (a) {
      return a * a;
    }
  )
);

/* add_maker */

function add_maker(a) {
  return function (b) {
    // 안에 있는 이 함수는 클로저임
    return a + b;
  };
}

var add10 = add_maker(10);
var add20 = add_maker(20);
console.log(add10(20));
console.log(add20(20));
