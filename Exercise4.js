// Exercise 4
// Ask the user to input the temperature as a number (store in variable FTEMP), and convert it to celcius (store in variable CTEMP)
// // Log the message FTEMP Fahrenheit equals CTEMP in Celcius

FTEMP = parseInt(prompt ("Please enter temperature"))
CTEMP = (FTEMP - 32) * 5 / 9
console.log (FTEMP  + " degrees Farenheit equals " + CTEMP + " degrees in Celcius.")
