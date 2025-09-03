/**
 * 비동기 처리 함수 또는 로직을 실행해 주는 대리자 역할을 함
 * - resolve, reject 결과를 반환
 * - 실행 결과는 promise객체.then(callback).catch(callback)
 * - then() : resolve로 반환(성공)
 * - catch() : reject로 반환(실패)
 */

//모두 콜백 함수임
// let promise1 = new Promise(callback)
// let promise1 = new Promise(function() {});

//순차적으로 처리하고자 하는 비동기식 코드를 포함한 함수에 async를 붙인다
async function asyncTest() {
    let dataArray = null;
    //비동기 처리 객체
    let promise1 = new Promise((resolve, reject) => {
        //실행로직: 대부분 비동기식
        let numbers = [1, 2, 3, 4, 5];
        resolve(numbers);
    });
    
    //1. 비동기 처리
    await promise1
        // .then(callback: 성공시 실행 함수)
        // .catch(callback: 실패시 실행 함수)
        .then((result) => dataArray = result)
        .catch((reject) => console.log(`catch ---------------> error, reject`));
    
    //2. 동기식
    console.log(dataArray);

}

asyncTest();