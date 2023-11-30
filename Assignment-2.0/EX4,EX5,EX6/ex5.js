"use strict";
// ==============================================================================
// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
function eligibleForVote(age, country) {
    if (country === "pakistan") {
        console.log(`\nGreat you'r from ${country}`);
        if (age >= 18) {
            console.log("congraturate! You'r ELigible for Vote");
        }
        else {
            console.log(`Age resistriction(ABOVE18):you'r are not Eligible for Vote Because you'r${age}`);
        }
    }
    else {
        console.log(`\nplease provide correct country required(pakistan)But you'r ${country}`);
    }
}
eligibleForVote(25, "pakistan");
eligibleForVote(30, "india");
eligibleForVote(15, "pakistan");
