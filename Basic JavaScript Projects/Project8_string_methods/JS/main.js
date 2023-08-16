/*concat()method*/
function full_Sentence() {
    var part_1 = "The rain ";
    var part_2 = "in Spain ";
    var part_3 = "falls mainly ";
    var part_4 = "on the plain.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
/*slice() method*/
function slice_Method() {
    var Sentence = "Yer a wizard, Harry.";
    var Section = Sentence.slice(6,12);
    document.getElementById("Slice").innerHTML = Section;
}
/* uppercase method*/
function toUpperCase() {
    var change_size = "I'M BIG NOW!!"
    document.getElementById("Larger").innerHTML = change_size;
}
/* search method*/
function search() {
    let text = "This is confusing"
    let position = text.search("confusing");
    document.getElementById("Find").innerHTML = position;
}

/*toString method */
function string_Method() {
    var X =98;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 87323.0574968;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}