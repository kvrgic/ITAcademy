var brojac = 0;
do{
    var poruka = brojac > 0 ? "Pogrijesili ste, molimo vas unesite ponovo prvi broj:" : "Unesite prvi broj:";
    var firstNumber = + prompt(poruka);
    brojac++;
} while (isNaN(firstNumber));

var acceptableOperators = new Array("+", "-", "/", "*");
var brojac3 = 0;
do {
    var poruka = brojac3 > 0 ? "Pogrijesili ste, molimo vas ponovo unesite operator, mogući operatori su /, *, + i -" : "Unesite operator (+, -, / ili *)";
    var operator = prompt(poruka);   
    brojac3++;
} while (!acceptableOperators.includes(operator.trim()));

var brojac2 = 0;
do{
    var poruka = brojac2 > 0 ? "Pogrijesili ste, molimo vas unesite ponovo drugi broj" : "Unesite drugi broj";
    if (operator === "/"  && secondNumber === 0) poruka = "Ne mozes bolan s nulom jadan ne bio dje ce ti dusa";
    var secondNumber = + prompt(poruka);
    brojac2++;
} while (isNaN(secondNumber) || (operator === "/"  && secondNumber === 0));

switch (operator.trim()){
    case "+":
        document.write(`Vaš rezultat je: ${firstNumber+secondNumber}`);
        break;
    case "-":
        document.write(`Vaš rezultat je: ${firstNumber-secondNumber}`);
        break;
    case "*":
        document.write(`Vaš rezultat je: ${firstNumber*secondNumber}`);
        break;
    case "/":
        document.write(`Vaš rezultat je: ${firstNumber/secondNumber}`);
        break;
}

/*if (operator === "+"){
    document.write(`Vaš rezultat je: ${firstNumber+secondNumber}`);
} else if (operator === "-"){
    document.write(`Vaš rezultat je: ${firstNumber-secondNumber}`);
} else if (operator === "*"){
    document.write(`Vaš rezultat je: ${firstNumber*secondNumber}`);
} else if (operator === "/" && secondNumber !== 0){
    document.write(`Vaš rezultat je: ${firstNumber/secondNumber}`);
} else {
    document.write(`Niste unijeli dobar operator!!!
    Pokušajte ponovo.`)
}*/