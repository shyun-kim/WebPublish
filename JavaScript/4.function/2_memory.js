/**
 * 함수 생성 및 호출
 */

// 문자 -> 숫자 변환 함수
function toNumber(a,b) {
    let obj = {
        a: parseInt(a),
        b: parseInt(b)
    };
    return obj;
}
function toNumber(a,b) {
    return {
        a: parseInt(a),
        b: parseInt(b)
    };
}


add(100,200);
add('100','200');

// function add(num1,num2) {
//     if(typeof num1 === 'string' && typeof num2 === 'string') {
//         num1 = parseInt(num1);
//         num2 = parseInt(num2);
//     }
//     console.log(`sum = ${num1+num2}`);
// }
// function add(num1,num2) {
//     let obj = null;
//     if(typeof num1 === 'string' && typeof num2 === 'string') {
//         obj = toNumber(num1,num2)
//         console.log(`sum = ${obj.a+obj.b}`);
//     } else {
//         console.log(`sum = ${num1+num2}`);
//     }
// }
function add(num1,num2) {
    let obj = toNumber(num1,num2);
    console.log(`sum = ${obj.a+obj.b}`);
}

//Arrow function
// const min = (num1, num2) => {
//     if(typeof num1 === 'string' && typeof num2 === ' string') {
//         num1 = parseInt(num1);
//         num2 = parseInt(num2);
//     }
//     if(num1>num2) {
//         console.log(`min = ${num1 - num2}`);
//     } else {
//         console.log(`값이 올바르지 않습니다.`);
//     }
// }
const min = (num1, num2) => {
    let obj = toNumber(num1, num2)
    if(obj.a > obj.b) {
        console.log(`min = ${num1 - num2}`);
    } else {
        console.log(`값이 올바르지 않습니다.`);
    }
}

min(200,100);
min('200','100')