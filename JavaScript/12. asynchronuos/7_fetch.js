/**
 * fetch(): 데이터(JSON, ..) 파일을 호출하여 데이터를 가져오는 함수
 */

//최초 호출 함수: window.onload(), window.addEventListener()..
window.addEventListener('DOMContentLoaded', function(){
    showResult();
})

// function getJson() {
//     let result = fetch("./data.json");
//     console.log(result);
    
// }

// function getJson() {
//     fetch("./data.json")
//         .then((result) => {
//             console.log(result);
//         })
//         .catch(error => console.log(error));
// }

// function getJson() {
//     fetch("./data.json")
//         .then((response) => response.json())
//         .then((jsonData) => {
//             let jsonData2 = JSON.stringify(jsonData)
//             console.log(jsonData2); //텍스트
            
//             let jsonData3 = JSON.parse(jsonData2)
//             console.log(jsonData3); //parse: 텍스트를 객체로 변환
            

//             // console.log(jsonData);
//             // console.log(JSON.stringify(jsonData));
            
//             jsonData.forEach(obj => {
//                 console.log(obj.name, obj.age, obj.job);
                
//             });
//         })
//         .catch(error => console.log(error));
// }

async function getJson() {
    let response = await fetch("./data.json")
    return response.json();
    //fetch는 Promise 형식, 비동기 이므로 대기
    //하지만 return은 바로 리턴해야 해서 fetch가 실행되지 않아 response는 아무값도 없는것
    //async로 비동기 처리 있다고 선언
}

async function showResult() {
    //1. getJson() 결과 가져오기
    let data = await getJson();

    //2. output 변수에 html 코드 저장
    let output = `
        <table border=1> 
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Job</th>
            </tr>
            
            ${
                //for ..of
                //map()
                //forEach는 안됨
                data.map((item) => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.job}</td>
                    </tr>
                `).join("")
            }
        </table>
    `;

    console.log(`output => ${output}`);
    

    //3. innerHTML로 output 출력
    document.querySelector(`#content`).innerHTML = output;
    
}