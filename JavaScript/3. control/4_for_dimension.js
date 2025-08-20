/**
 * 중첩 for문
 * for() {          //행
 *      for() {     //열
 *          실행문;
 *      }
 *      한 행 종료 후 개행;
 * }
 * 
 * 1(1,1)   2(1,2)  3(1,3)
 * 4(2,1)   5(2,2)  6(2,3)
 * 
 */

let count = 1;
for(let i=0; i<2; i++) {        //행
    let rows = '';
    for(let j=0; j<3; j++) {    //열
        rows += `${count++}\t`;
    }
    console.log(rows);
    
}