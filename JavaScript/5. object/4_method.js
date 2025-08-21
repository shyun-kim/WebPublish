/**
 * 객체를 생성하는 함수: 생성자 함수
 * 일반함수를 정의하는 형식으로 사용해야함
 * 
 * 객체의 메소드 정의
 * : 함수를 정의하여 메소드 구현
 */
const fruits = {
    //field
    name : 'apple',
    emoji: '🍎',

    //method
    getName: function() {
        return this.name;
    },
    getEmoji: function() {
        return this.emoji;
    },
    display: function() {
        console.log(this.name, this.emoji);  
    }
}
console.log(fruits);
console.log(fruits.display); //display 주소값 출력
fruits.display(); //display 끝까지 실행한 후 실행 결과물 출력
console.log(fruits.getName());
console.log(fruits.getEmoji);

console.log('==============================');



function apple(name, emoji) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.emoji);
        
    }
}
// const apple = (name, emoji) => { //arrow function 사용 불가
//     this.name = name;
//     this.emoji = emoji;
// }

let redApple = new apple("사과", "🍎");
console.log(redApple);
redApple.display();

//자바에서 객체 -> 필드, 메소드