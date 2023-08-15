/*global variable example*/
var X = 7;
function Add_numbers_1() {
    document.write(22 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 45);
}
Add_numbers_1();
Add_numbers_2();

/*local variable example*/
function Add_numbers_1() {
    var X = 7;
    document.write(22 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 45);
}
Add_numbers_1();
Add_numbers_2();

/*debug using console.log() method*/
function Add_numbers_1() {
    var X = 7;
    console.log(22 + X);
}
function Add_numbers_2() {
    console.log(X + 45);
}
Add_numbers_1();
Add_numbers_2();

/* if, else, else if statements */
if (9 > 8) {
    document.write("Look at you, Count Dracula!")
}

if (12 > 10) {
    document.write(" 1,2,3, hahaha")
}

function get_Date() {
    if (new Date().getHours() < 22) {
        document.getElementById("Hello").innerHTML = "What upppp?";
    }
}
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 15) {
        Swim = "You can swim without any adults present! WAHOO!";
    } 
    else {
        Swim = "SORRY. Try again when you're older!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Swim;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 18 == Time > 6) {
        Reply = "Time for some sunshine!"
    }
    else if (Time >= 18 == Time <23) {
        Reply = "Oooh the moon!";
    }
    else {
        Reply = "Get some sleep.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}