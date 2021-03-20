function increment (){
    let number = parseInt(document.querySelector("#number").textContent);
    number += 1
    document.querySelector("#number").textContent = number
}    
function decrement (){
    let number = parseInt(document.querySelector("#number").textContent);
    number -= 1
    document.querySelector("#number").textContent = number
}
function neutral (){
    document.querySelector("#number").textContent = 0
}