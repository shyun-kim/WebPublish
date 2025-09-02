// 숫자 증가/감소 함수
function counter(type) {
    let number = document.querySelector("#number").textContent;
    if(type === 'increment') {
        document.querySelector("#number").textContent = ++number;
    } else {
        document.querySelector("#number").textContent = --number;
    }
}


/*
// 숫자 증가 함수
function increment() {
    // alert('increment')
    let number = document.querySelector("#number").textContent;
    
    if(number >= 0) {
        document.querySelector("#number").textContent = ++number;
    }
}

// 숫자 감소 함수
function decrement() {
    // alert('decrement')
    let number = document.querySelector("#number").textContent;
    
    if(number > 0) {
        document.querySelector("#number").textContent = --number;
    }
}
*/