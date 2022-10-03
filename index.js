// This function clear all the values
document.getElementById("result").value = "";

function clearScreen() {
document.querySelector(".error").style.display="none";
document.getElementById("result").value = "";
}
// This function display values
function display(value) {
document.getElementById("result").value += value;
}
// This function evaluates the expression and returns result
function calculate() {
var exp = document.getElementById("result").value;
s="";
for(let i=0;i<exp.length;i++){
  if(exp[i]==="^") s+="**";
  else if(exp[i]==="²") s+="**2";
  else s+=exp[i];
}
try {
      var q = eval(s);
      document.getElementById("result").value = q;
    }
catch (e) {
        document.querySelector(".error").style.display="block";
    }
}
