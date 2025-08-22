import { Student, Professor, Parent, Employee } from '../commons/member.js';

/**
 * Signup 버튼 이벤트 처리 함수: signupCheck()
 */
export function signupCheck() {
    let type = document.querySelector('input[type=radio]:checked').value;
    let name, age, address, sno, subject, cname, department;
    let member = null;

    switch (parseInt(type)) {
        case 1:
            //이부분이 너무 길어지면 함수로 호출
            sno = document.querySelector('#student #sno').value;
            name = document.querySelector('#student #name').value;
            age = document.querySelector('#student #age').value;
            address = document.querySelector('#student #address').value;
            member = new Student(name, age, address, sno)
            break;
        case 2:
            name = document.querySelector('#professor #name').value;
            age = document.querySelector('#professor #age').value;
            address = document.querySelector('#professor #address').value;
            subject = document.querySelector('#professor #subject').value;
            member = new Professor(name, age, address, subject)
            break;
        case 3:
            name = document.querySelector('#parent #name').value;
            age = document.querySelector('#parent #age').value;
            address = document.querySelector('#parent #address').value;
            cname = document.querySelector('#parent #cname').value;
            member = new Parent(name, age, address, cname)
            break;
        case 4:
            name = document.querySelector('#employee #name').value;
            age = document.querySelector('#employee #age').value;
            address = document.querySelector('#employee #address').value;
            department = document.querySelector('#employee #department').value;
            member = new Employee(name, age, address, department)
            break;
            
    }
    //서버(NodeJS)로 전송 => member 전송!!
    //서버(WAS)로 전송 => object literal 형태로 전송
    member.display();
    console.log(member.makeObject()); //object literal 출력
    
}



/**
 * 라디오 버튼 이벤트 처리 함수 정의 : display(타입);
 */


// }
export function display(type) {
    //#student block - display:block, 나머지는 display:none
    document.querySelector("#student").style.display = "none";
    document.querySelector("#professor").style.display = "none";
    document.querySelector("#parent").style.display = "none";
    document.querySelector("#employee").style.display = "none";

    if(type === '1') {
        document.querySelector("#student").style.display = "block";
    } else if(type === '2') {
        document.querySelector("#professor").style.display = "block";
    } else if(type === '3') {
        document.querySelector("#parent").style.display = "block";
    } else if(type === '4') {
        document.querySelector("#employee").style.display = "block";
    }

}


