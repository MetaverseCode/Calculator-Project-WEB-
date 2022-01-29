
function button16(){
document.getElementById("input").value = "";
  document.getElementById("h3").innerHTML = "";
}
function button(){
document.getElementById("input").value += "7";
document.getElementById("h3").innerHTML += "7";
}
function buttontwo(){
  document.getElementById("input").value += "8";
  document.getElementById("h3").innerHTML += "8";
}
function buttonthree(){
  document.getElementById("input").value += "9";
  document.getElementById("h3").innerHTML += "9";
}
function buttonfour(){
  document.getElementById("input").value += "÷";
  document.getElementById("h3").innerHTML += "/";
}
function buttonfive(){
  document.getElementById("input").value += "4";
  document.getElementById("h3").innerHTML += "4";
}
function buttonsix(){
  document.getElementById("input").value += "5";
  document.getElementById("h3").innerHTML += "5";
}
function buttonseven(){
  document.getElementById("input").value += "6";
  document.getElementById("h3").innerHTML += "6";
}
function button8(){
  document.getElementById("input").value += "X";
  document.getElementById("h3").innerHTML += "*";
}
function buttonnine(){
  document.getElementById("input").value += "1";
  document.getElementById("h3").innerHTML += "1";
}
function buttonten(){
  document.getElementById("input").value += "2";
  document.getElementById("h3").innerHTML += "2";
}
function button11(){
  document.getElementById("input").value += "3";
  document.getElementById("h3").innerHTML += "3";
}
function buttontwelve(){
  document.getElementById("input").value += "+";
  document.getElementById("h3").innerHTML += "+";
}
function button13(){
  document.getElementById("input").value += "0";
  document.getElementById("h3").innerHTML += "0";
}
function button14(){
  document.getElementById("input").value += ".";
  document.getElementById("h3").innerHTML += ".";
}
function minus(){
  document.getElementById("input").value += "-";
  document.getElementById("h3").innerHTML += "-";
}

function suraj(){
  var four = document.getElementById("buttonfour").value;
  var five = document.getElementById("button8").value;
  var six = document.getElementById("buttontwelve").value;
}
function button15(){
var x = document.getElementById("h3").innerHTML;

var y = eval(x);

if (x == "0/0"){
  document.getElementById("input").value = "This Can't Be Happen";
}
else if (x == "3/0"){
  document.getElementById("input").value = "This Can't Be Happen"
}
else if (x == "4/0"){
  document.getElementById("input").value = "This Can't Be Happen"
}
else if (x == "5/0"){
  document.getElementById("input").value = "This Can't Be Happen"
}
else if (x == "6/0"){
  document.getElementById("input").value = "This Can't Be Happen"
}
else if (x == "7/0"){
  document.getElementById("input").value = "This Can't Be Happen"
}
else if (x == "8/0"){
  document.getElementById("input").value = "This Can't Be Happen"
}
else if (x == "9/0"){
  document.getElementById("input").value = "This Can't Be Happen"
}
else if (x == "2/0"){
  document.getElementById("input").value = "This Can't Be Happen"
}
else if (x == "1/0"){
  document.getElementById("input").value = "This Can't Be Happen";
}
else if (x == "1+"){
  document.getElementById("input").value = "OnePlus 5G"
}
else {
  document.getElementById("input").value = y;
}
}
document.getElementById("h3").style.display = "none";
function back(){
var a = document.getElementById("input").value;
var b = a.substr(0,a.length-1);
document.getElementById("input").value = b;
var x = document.getElementById("h3").innerHTML;
var c = x.substr(0,x.length-1);
document.getElementById("h3").innerHTML = c;
}
