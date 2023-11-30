import inquirer from "inquirer";
//=========Here We Find The Area Of Rectangular,square, Triangle ,and cube 
let answer = await inquirer.prompt([{
        name: "Length",
        type: "number",
        message: "Enter the Length="
    },
    {
        name: "Width",
        type: "number",
        message: "Enter the Width="
    },
    {
        name: "Height",
        type: "number",
        message: "Enter the Height="
    },
    {
        name: "Base",
        type: "number",
        message: "Enter the Base="
    },
    {
        name: "oparator",
        type: "list",
        choices: ["FindTheAreaofRectangular", "FindTheAreaofTriangle", "FindTheAreaOfSquare", "FindTheAreaofCube"]
    }
]);
if (answer.oparator === "FindTheAreaofRectangular") {
    console.log(`Length of Rectangular=${answer.Length}\nWidth of Rectangular=${answer.Width}\nArea OF Rectangular=${answer.Length * answer.Width}`);
}
else if (answer.oparator === "FindTheAreaofTriangle") {
    console.log(`Base of triangle=${answer.Base}\nHeight of triangle=${answer.Height}\nArea of Triangle=${answer.Base * answer.Height / 2}`);
}
else if (answer.oparator === "FindTheAreaOfSquare") {
    console.log(`Length of one side=${answer.Length}\nAs we Know four Sides are equal\nThen The Area OF Square=${answer.Length ** 2}`);
}
else if (answer.oparator === "FindTheAreaofCube") {
    console.log(`Length of one side of Cube=${answer.Length}\nArea of Cube=${6 * answer.Length ** 2}`);
}
