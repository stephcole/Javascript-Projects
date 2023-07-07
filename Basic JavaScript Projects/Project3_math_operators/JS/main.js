//Math functions//

function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 7 - 3;
    document.getElementById("Math2").innerHTML = "7 - 3 =" + Subtraction;
}
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 x 8 = " + simple_Math;
} 
function division() {
    var simple_Math = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + simple_Math;
}
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; 
}
function mudulus_Operator () {
    var simple_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}
function negation_Operator () {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

//increment and decrement operators//
var B = 2;
B++;
document.write(B);

var X = 8.5;
X--;
document.write(X);

//random function, return a number between 0 and 1//
window.alert(Math.random());

//random function, return between 0 and 100//
window.alert(Math.random() * 70);

