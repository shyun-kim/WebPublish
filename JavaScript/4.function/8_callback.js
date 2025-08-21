/**
 * callback(콜백함수) : 함수의 파라미터로 입력되는 익명 함수
 */
const job = (a, b, callback) => { //a=1, b=2, callback = print 함수의 주소
    callback(a,b);
}

const print = (a,b) => {
    console.log(a, b);
    
}

job(1,2, print); //동기식

//setTimeout 함수 호출 : 비동기식 함수
// Window.setTimeout(함수호출, 시간); //Window는 생략가능 parseInt 도 생략된거
// setTimeourt은 비동기식 처리를 하므로, 백그라운드에 저장된 후, 이벤트 루프를 통해 호출되어 콜스택에서 처리될 때 자신이 포함한 콜백 함수를 실행한다.
// 동기식 함수를 넣어두면 그냥 먼저 실행해버리고 오류 발생
// setTimeout(callback(처리할 함수형식), delay);
// setTimeout(print(2,3), 1000);

console.clear();

console.log(`동기식 처리-----------> 1`);
console.log(`동기식 처리-----------> 2`);

setTimeout(() => {
    console.log(`setTimeout 호출(비동기)----- #1`);
}, 0);

console.log(`동기식 처리-----------> 3`);

setTimeout(() => {
    console.log(`setTimeout 호출(비동기)----- #2`);
}, 1000);
setTimeout(() => {
    console.log(`setTimeout 호출(비동기)----- #3`);
}, 1000);

console.log(`동기식 처리-----------> 4`);

//delay 시간 만큼 출력이 늦어지는게 아니라 task에 들어갈때 delay 시간만큼 대기 적용됨 >> #2, #3은 그래서 1초 대기하고 동시에 출력