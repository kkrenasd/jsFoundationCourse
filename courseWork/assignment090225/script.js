
function fruitProcessor(apples, oranges) {
    if (apples > 1 && oranges === 0) {
        console.log("Fruit processor produce apple juice on Monday');
    } else if (oranges > 1 && apples === 0) {
        console.log("Fruit processor produce oranges juice on Tuesday');
    } else if (apples > 1 && oranges > 1) {
        console.log("Fruit processor produce apple juice on Wednesday');
    }
}

fruitProcessor(2, 0); 
fruitProcessor(0, 2); 
fruitProcessor(2, 2); 

// Assignment 2 Part 1
function greet(name) {
    console.log("Hello, ${name}!");
}

greet('John');


const farewell = function(name) {
    console.log("Goodbye, ${name}!");
};

farewell('John'); 

greet('Alice'); 

const farewellArrow = (name) => {
    console.log("Goodbye, ${name}!");
};


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log("Dolphins: ${scoreDolphins}, Koalas: ${scoreKoalas}");


scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log("Dolphins: ${scoreDolphins}, Koalas: ${scoreKoalas}");


const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win (${avgDolphins} vs. ${avgKoalas})");
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win (${avgKoalas} vs. ${avgDolphins})");
    } else {
        console.log("No team wins!');
    }
};


checkWinner(scoreDolphins, scoreKoalas);
