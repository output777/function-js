/**
 * 식별자 해결(Identifier Resolution)
 * 식별자 해결이란 변수/함수 이름을 찾는 것입니다. 이름을 찾게 되면 값을 구할 수 있습니다.
 * 이때 스코프를 사용합니다.
 * 사용하는 이유는 스코프에서 이름을 찾기 위해서 입니다.
 * ex) point
 */
var point = 100;
function getPoint() {
  var point = 200;
  return point;
}
var result = getPoint();
console.log(result);

/**
 * 스코프
 * 스코프 목적: 범위를 제한하여 식별자 해결을 위해서 사용합니다.
 * 식별자가 유일하면 스코프가 필요하지 않습니다.
 */
