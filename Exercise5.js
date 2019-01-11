// Prompts the User to enter their outstanding loan amount as a number (LOANAMT)
// Prompts the User to enter the number of months in which they want to pay off the loan (NUMMONTHS)
// Calculates the monthly payment they need to make and logs it to the console as To pay of a loan of LOANAMT it will take NUMMONTHS months

LOANAMT = parseInt(prompt ("Please enter outstanding loan amount"))
NUMMONTHS = parseInt(prompt("Number of months to pay off loan"))
console.log ("Your monthly payment will be " + "$" + LOANAMT/NUMMONTHS)