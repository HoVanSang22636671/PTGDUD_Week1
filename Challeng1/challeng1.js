var massMark = 95, 
    heightMark = 1.88, 
    massJohn = 85, 
    heightJohn = 1.76;

var markBMI = (massMark /(heightMark*heightMark));
var johnBMI = (massJohn /(heightJohn*heightJohn));
var markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

console.log(markBMI);
console.log(johnBMI);
