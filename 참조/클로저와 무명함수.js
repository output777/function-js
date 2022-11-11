/**
 * 클로저
 * 클로저란 변수가 선언전 환경 레코드에 없으면 외부 렉시컬 환경 참조에서 식별자를 해결하는 것입니다.
 *
 * 렉시컬 환경 컴포넌트 = {
 *  환경 레코드: {
 *    선언적 환경 레코드: {
 *      param: 200
 *    },
 *  },
 *  외부 렉시컬 환경 참조: {
 *    point: 100
 *  }
 * }
 *
 *
 * 클로저 활용
 * 1. 클로저는 함수 밖 스코프의 변수와 함수를 사용할 수 있습니다.
 * 2. 변수는 외부에서 직접 접근할 수 없으므로 정보를 보호할 수 있습니다.
 * 3. 무명 함수 안에서 클로저의 변수를 가진 함수를 반환하면 함수의 재사용과 정보 보호를 할 수 있습니다.
 */

// 클로저 논리 전개
function book() {
  var point = 100;
  var getPoint = function (param) {
    point = point + param;
    return point;
  };
  return getPoint;
}
var obj = book();
console.log(obj(200));

function book1(bookParam) {
  var point = 100;
  function getPoint(pointParam) {
    point = point + bookParam + pointParam;
    return point;
  }
  return getPoint;
}
var obj1 = book1(200);
console.log(obj1(400));

// 클로저가 아닌 함수
var a = 10;
var b = 20;
function f1() {
  return a + b;
}
console.log(f1());

function f2() {
  var a = 10;
  var b = 20;
  function f3(c, d) {
    return c + d;
  }
  return f3;
}
var f4 = f2();
console.log(f4(5, 7));

function f5() {
  var a = 10;
  var b = 20;
  function f6() {
    return a + b;
  }
  return f6();
}
console.log(f5());

// 다시 클로저 함수
function f7() {
  var a = 10;
  function f8(b) {
    return a + b;
  }
  return f8;
}
var f9 = f7();
console.log(f9(20));
console.log(f9(10));

function f10() {
  var a = 10;
  var f11 = function (c) {
    return a + b + c;
  };
  var b = 20;
  return f11;
}
var f12 = f10();
console.log(f12(30));

/**
 * 무명 함수
 * 무명 함수 안에 작성한 값, 함수는 무명 함수가 끝나면 지워집니다.
 * 따라서 다시 사용하려면 저장을 해야하지만, 무명 함수는 저장하지 않으려는 의도로 사용합니다.
 */

// 클로저와 무명 함수
var book2 = (function () {
  var point = 100;
  function getPoint(param) {
    return point + param;
  }
  return getPoint;
})();
console.log(book2(200));
