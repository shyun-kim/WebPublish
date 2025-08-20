/**
 * 구구단 출력: 2~9단
 */

// let number1 = 2;
// for(let i=0; i<8; i++) {
//     let number2 = 1;
//     for(let i=0; i<9; i++) {
//         console.log(`${number1} x ${number2} = ${number1*number2}`);
//         number2++;
//     }
//     number1++;
// }

for(let i=1; i<10; i++) {
    let rows = '';
    for(let j=2; j<10; j++) {
        rows += `${j} * ${i} = ${i*j}\t`
    }
    console.log(rows);
}

/**
    *
    **
    ***
    ****
    *****
5행의 별 찍기
 */

for(let i = 1; i<=5; i++) {
    let output = '';
    for(let j =1 ;j<=i; j++){
        output += '*';
    }
    console.log(output);
}

/**
 * 초록사과 찍기, 3행 줄만 빨간 사과 출력
 */
for(let i=1; i<=5; i++) {
    let output ='';
    for(let j=1; j <=i; j++) {
        if(i === 3) {
            output += '🍎';
        } else {
            output += '🍏';
        }
    }
    console.log(output)
}