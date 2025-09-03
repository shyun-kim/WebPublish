/**
 * V8 엔진 구조 숙지!
 * 동기식(Synchronuos) 
 * - 한 줄씩 순차적으로 실행하는 방식, 즉시 처리
 * - 실행 > call stack > 바로 처리(순차적 처리)
 * 
 * 비동기식(aSynchronuos) 
 * - 대량의 데이터 처리방식, 나중 처리
 * - 실행 > call stack > Web API, Background 저장 > Task Queue > (call stack 비워지면) Event Loop 저장 된 task 하나씩 call stack 올려 실행
 * - setTimeOut(), fetch(), DB연동...
 * - DB 연동시 순차적인 처리 필수(서버연결 > SQL 전송 > 결과를 객체에 저장 ...)
 * - 비동기식 처리에서 순차적인 처리가 필요한 경우 : async, await 키워드를 사용
 * - Promise 라고 객체를 이용하여 callback 함수 호출을 진행
 */

//동기식
function a() {
    b();
    setTimeout(() => {
        console.log(`바로 Task queue에 들어감`);
    });
    console.log(`---------------------> a`);
}

function b() {
    setTimeout(() => {
        console.log(`1초 후에 Task Queue에 들어감`);
    }, 1000)
    console.log(`---------------------> b`);
}

function c() {
    a();
    console.log(`---------------------> c`);
}

// console.log(a,b,c);
// a();
// b();
c();
