/**
 * 클래스란? 객체를 생성하기 위한 틀(설계도)
 */

/*
    class 클래스명 {
        //필드명
        
        //생성자

        //메소드
    }
*/
class Animal {
    //static 변수, 상수
    static MAX_SIZE =10;

    //생성자
    constructor(name, emoji) {      //java에서는 public 클래스이름 으로 생성자를 만들었으나, js에서는 constructor() 사용, 오버로딩 불가
        this.name = name;           //JS에서는 따로 전역 변수를 선언하지 않아도 사용 가능
        this.emoji = emoji
    }

    //메소드
    display = () => {
        console.log(this.name, this.emoji);
    }
}

let dog = new Animal('해피','🐶');

dog.display();
console.log(Animal.MAX_SIZE);
