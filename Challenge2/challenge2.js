var massMark = 95, 
    heightMark = 1.88, 
    massJohn = 85, 
    heightJohn = 1.76;

var markBMI = (massMark /(heightMark*heightMark));
var johnBMI = (massJohn /(heightJohn*heightJohn));
var markHigherBMI = markBMI > johnBMI;

if(markHigherBMI) {
    console.log("Mark's BMI (",(markBMI.toFixed(1)),") is higher than John's(",(johnBMI.toFixed(1)),")!");
} else {
    console.log("John's BMI (",(johnBMI.toFixed(1)),") is higher than Mark's(",(markBMI.toFixed(1)),")!");
}