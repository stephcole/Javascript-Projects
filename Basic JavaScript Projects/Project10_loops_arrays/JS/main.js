//while loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//for loop
var Music = ["Rock", "Hip_Hop", "Blues", "Country", "Jazz", "Pop"];
var Content = "" ;
var Y;
function for_Loop() {
    for (Y = 0; Y < Music.length; Y++) {
        Content += Music[Y] + "<br>";
    }
    document.getElementById("List_of_Music_genres").innerHTML = Content;
}

//array
function array_Function() {
    var Ocean = [];
    Ocean[0] = "blue";
    Ocean[1] = "calm";
    Ocean[2] = "deep";
    Ocean[3] = "mysterious";
    document.getElementById("Array").innerHTML = "The ocean is " +
        Ocean[1] + ".";
}

//using "let"
var X = 12
document.write("<br>" + X);
{   
    let X = 29;
    document.write("<br>" + X);
}
document.write("<br>" + X);