let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let submit=document.getElementById("submit")

input1Value=input1.value
input2Value=input2.value
function save(){


localStorage.setItem(input1.value,input2.value)

}
submit.addEventListener("click",save)
