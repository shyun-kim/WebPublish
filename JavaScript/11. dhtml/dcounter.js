//최초 호출되는 함수 : window.onload(), window.addEventListener()...
window.addEventListener('DOMContentLoaded', function() {
    initForm();
}) 



//화면 폼 함수
function initForm() {
    let output = `
        <h1>DCounter</h1>
        <div>
            <div id="number">0</div>
            <button type="button" onclick="counter('increment')">increment(+)</button>
            <button type="button" onclick="counter('decrement')">decrement(-)</button>
        </div>
    `;
    document.querySelector('#content').innerHTML = output;
}

function counter(type) {
    let number = document.querySelector("#number").textContent;
    if(type === 'increment') {
        document.querySelector("#number").textContent = ++number;
    } else {
        document.querySelector("#number").textContent = --number;
    }
}