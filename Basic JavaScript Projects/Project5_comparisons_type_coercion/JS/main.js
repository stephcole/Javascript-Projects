//string and numbers//

document.write(typeof 9);
document.write(typeof "banana");
document.write("8" + 200);

//boolean values//

document.write(8<7);
document.write(8>7);


//double equal signs//

document.write(7==7);
document.write(8==13);

//triple equal signs//

A="Boston";
B="New York City";
document.write(A===B);

C= 22;
D= 22;
document.write(C===D);

//logical opeators//

document.write(9<12 && 11>3);
document.write(8>6 && 8>9);

// || is or//
document.write(22>19 || 19>22);


//"Not" operator//
function not_Function() {
    document.getElementById("Not").innerHTML = !(33 > 32);
}
function not_Function() {
    document.getElementById("Not").innerHtml = !(29<28);
}