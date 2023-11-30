//Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.


let checkNumber=[12,67,-90,0,78,-67,0,95];
for (let number of checkNumber) {
 console.log(number);
 if (number>0) {
    console.log("the number is positive");
    }
    else if(number<0){console.log("the number is nagative");
    }
    else{console.log("the number is zero");
    }
    
}