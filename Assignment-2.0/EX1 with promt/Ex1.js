//Exercise 1:  Write a program that calculates the area of a rectangle.
import inquirer from "inquirer";
import chalk from 'chalk';
// let answers = await inquirer.prompt([{
//         name: "length",
//         type: "number",
//         message: "Enter Rectangular Length:"},
//         {
//             name:"width",
//             type:"number",
//             message:"Enter Rectangular width "
//         }
//     ]);
//     console.log("Area of Rectangular ="+chalk.red(answers.length*answers.width));
// ============Find the Area of square ================
console.log("As we know 'All four sides of square are equal.' Then we only need one side length ");
let answers1 = await inquirer.prompt([{
        name: "Length",
        type: "number",
        message: "Enter the length of square="
    }]);
console.log(`Area of square=${chalk.bgGreenBright.bold(answers1.Length ** 2)}sqarefeet`);
