"use strict";

/***** Variablen 01 *******/
// Zeilen Kommentar
/** 
 * Block Kommentar
 */ 


// console.log("Hello World!");

// let firstName;
// firstName = "Max";
// console.log(firstName);

// let familyName = "Mütze";
// console.log(familyName);
// console.log(firstName + " " + familyName);

// Deklaration und Zuweisung 2

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben:");
// familyName = prompt("Bitte Nachnamen eingeben:");
// console.log(firstName + " " + familyName);

// let test;
// test = "Hi";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);


/****KONSTANTEN     */
 
// const test = "hi"; // Variablen mit konstantem Inhalt
// test = 2; //keine Zuweisung möglich
// console.log("Inhalt: " + test);

//Beispiel

// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark; //birth_year_john

// let year = 2022;
let date = new Date();
let year = date.getFullYear();


// //WERTZUWEISUNG
ageJohn = 25;
ageMark = 30;

// Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;
// Ausgabe
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark: " + birthYearMark);