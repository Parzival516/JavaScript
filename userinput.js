var firstName=window.prompt("Please enter your name: ")

console.log("Hello",firstName)

document.getElementById("myButton").onclick=function()
{
    var myName=document.getElementById("myText").value;
console.log("Hello",myName)
}