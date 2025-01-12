var score_D1 = 97, score_D2 = 112, score_D3 = 101;
var score_K1 = 109, score_K2 = 95, score_K3 = 123;

var average_D = (score_D1 + score_D2 + score_D3) / 3;
var average_K = (score_K1 + score_K2 + score_K3) / 3;


if(average_D >= 100 || average_K >= 100) {
    if(average_D > average_K && average_D >= 100) {
        console.log("Dolphin win the trophy!");
        
    } else if(average_K > average_D && average_K >= 100) {
        console.log("Koalas win the trophy!");
    } else if(
        average_D === average_K && average_D >= 100 && average_K >= 100
    ) {
        console.log("It's a drawn! Both teams win the trophy!");
        
    } else {
        console.log("No team win the trophy!");
        
    }
} else {
    console.log("No team win the trophy!");
    
}

