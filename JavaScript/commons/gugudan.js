/**
 * 싱글 구구단 - 단 하나를 매개변수로 입력 받아 출력
 */
export function singleGugudan(dan){
    for(let i=1; i<10; i++) {
        let result=i*dan
        console.log(`${dan} x ${i} = ${result}`);
    }
}

// export 할때 default를 붙이면  import 할때 {} 안에 안넣어도 사용 가능

export function multiGugudan(start, end){
    for(let i=1; i<=9; i++){
        let rows = '';
        for(let j=start; j <=end; j++) {
            rows += `${j} x ${i} = ${i*j}\t`;
        }
        console.log(rows);
        
    }

}