"use strict";
//  ==============================Simplest way===============================
console.log("==========Find Area of Rectangular?=========\n");
function AreaOfRectangular(length, width) {
    console.log(`The value of length=${length} \nAnd width=${width}\nArea of Rectangular=` + length * width);
}
AreaOfRectangular(10, 30);
//================================Area of square========================
function areaOfSquare(length) {
    console.log(`The length of one side=${length}\nAs we know length of all 4 side are equal\n then the are of square=` + length ** 2 + "square feet");
}
areaOfSquare(4);
