/**
 * 로그인 처리 함수
 */

/**회원관리 클래스 */
// class User {
//     #id;
//     #pwd;

//     constructor(id, pwd){
//         this.#id=id;
//         this.#pwd=pwd;
//     }

//     getId = () => this.#id;
//     getPass = () => this.#pwd;

//     setId = (id) => this.#id = id;
//     setPass = (pwd) => this.#pwd = pwd;

//     display = () => console.log(this.#id, this.#pwd);
    
//     makeObject = () => {
//         return {
//             'id': this.#id,
//             'pwd':this.#pwd
//         }
//     }
// }


class Member {
    #id;
    #pwd;
    constructor(id, pwd){
        this.#id = id;
        this.#pwd = pwd;
    }
    getId = () => this.#id;
    setId = (id) => this.#id = id;

    getPwd = () => this.#pwd;
    setPwd = (pwd) => this.#pwd = pwd;
    
    display = () => console.log(this.getId(), this.getPwd())
}

class JoinMember extends Member {
    constructor(id, pwd, name, phone, emailname, emaildomain) {
        super(id, pwd);
        this.name = name;
        this.phone = phone;
        this.emailname = emailname;
        this.emaildomain = emaildomain;
    }

    display = () => console.log(
        this.getId(),
        this.getPwd(),
        this.name,
        this.phone,
        this.emailname,
        this.emaildomain
    );
}

// function loginCheck() {
//     let id,pwd;
//     let info = null;

//     id = document.querySelector('#login #id').value;
//     pwd = document.querySelector('#login #pwd').value;
//     info = new User(id, pwd)
//     info.display();
//     console.log(info.makeObject());
    
// }




function loginCheck() {
    let id = document.querySelector("#id");
    let pwd = document.querySelector("#pwd");
    let member = null;
    
    if(id.value === ''){
        alert('아이디를 입력해주세요');
        id.focus();
    } else if (pwd.value === '') {
        alert('패스워드를 입력해주세요');
        pwd.focus();
    } else {
        // console.log(id.value, pwd.alue);
        member = new Member(id.value, pwd.value);
        member.display();
    }
}


/**
 * 회원가입 처리 함수
 */
function signupCheck(){
    let id = document.querySelector("#id")
    let pwd = document.querySelector("#pwd")
    let cpwd = document.querySelector("#cpwd")
    let name = document.querySelector("#name")
    let phone = document.querySelector("#phone")
    let emailname = document.querySelector("#emailname")
    let emaildomain = document.querySelector("#emaildomain")
    let member = null;

    if(id.value === ''){
        alert('아이디를 입력해주세요');
        id.focus();
    } else if (pwd.value === '') {
        alert('패스워드를 입력해주세요');
        pwd.focus();
    } else if (cpwd.value === '') {
        alert('패스워드를 입력해주세요');
        cpwd.focus();
    } else if (name.value === '') {
        alert('이름을 입력해주세요');
        name.focus();
    } else if (phone.value === '') {
        alert('전화번호를 입력해주세요');
        phone.focus();
    } else if (emailname.value === '') {
        alert('이메일 주소를 입력해주세요');
        emailname.focus();
    } else if (emaildomain.value === 'default') {
        alert('이메일 도메인을 선택해주세요');
        emaildomain.focus();
    } else {
        //서버 전송
        // console.log(id.value, pwd.value, cpwd.value, name.value, phone.value, emailname.value, emaildomain.value);
        member = new JoinMember(id.value, pwd.value, name.value, phone.value, emailname.value, emaildomain.value);
        member.display();
    }
}