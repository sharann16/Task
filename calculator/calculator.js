let output=document.getElementById("inpu")
function display(num){
    output.value += num;    
}
function clea(){
    output.value=""
}
function calcc(){
output.value=eval(output.value)
}
function del(){
    output.value=output.value.slice(0,-1)
}