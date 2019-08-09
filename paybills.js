var foodcost=prompt("Enter Food cost to be paid:");
let people=prompt("Enter number of people:")
document.writeln("The total foodcost was: ",foodcost,"<br>"); 
document.writeln("Each one has to pay: ", (foodcost/people).toFixed(2));


