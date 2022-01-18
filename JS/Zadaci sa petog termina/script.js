// Zataak sto je bio za zadacu 

var s1 = 'Hello World ';
var s2 = 'From JavaScript';

var s3 = s1.concat(s2);
console.log(s3);

function transformString(txt){
    var nizSlova = txt.split('');
    for (var i = 0; i < nizSlova.length; i++){
        var slovo = nizSlova[i];
        document.write(`<span style="color:${i % 2 === 0?'red':'black'};">${slovo}</span>`);  
    }
}

transformString(s3);

// Zadatak pozitivni i negativni niz

var niz = [5, 34, -1, 789, -18, -34, 98, -22 ];
// potrebno je napisati fukciju koja izvlazi sve pozitivne brojeve i stavlja u jedan niz, i sve negativne broje stavalja u drugi niz


function sortPN (arr){
    var nizPozitiv = [];
    var nizNegativ = [];
    for(var broj of niz){
        broj > 0? nizPozitiv.push(broj) : nizNegativ.push(broj);
    }
    document.write(`<br> Niz negativnih brojeva je: ${nizNegativ}  <br> Niz pozitivnih brojeva je: ${nizPozitiv} <br>`);
}
sortPN(niz);

// zadatak, potrebno niz očistiti od duplikata

var niz2 = [18, 34, -1, 789, 18, 34, 98, -22];

function check(arr){
    var niz3 =[];
    var dupli =[];
    
    for(var elements of arr){

        if(!niz3.includes(elements)){
            niz3.push(elements);
        } else{
            dupli.push(elements);
        }
    }
    document.write(`<br>U nizu imaju ${dupli.length} dupla elementa`);

    return niz3;  
}

// pokusaj sa brojacem

console.log(check(niz2));

var niz2 = [18, 34, -1, 789, 18, 34, 98, -22];


function check(arr){
    var niz3 =[];
    var brojac = 0;
    
    for(var elements of arr){
        
        if(!niz3.includes(elements)){
            niz3.push(elements);
        } else{
            brojac++;
        }
    }
    document.write(`<br>U nizu imaju ${brojac} dupla elementa`);

    return niz3;  
}


console.log(check(niz2));


// sljedeci zadatak
//Treba napraviti funkciju koja prima neki text, prepoznaje i vraca najduzu rijec.

var text = 'Hello World From JavaScript';

function najduzaRijec(txt){
    //prvo sam napravila varijablu koja je trenutno prazna
    var longword = ' ';
    //zatim sam splitala svoj string da dobijem niz rijeci
    var nizRijeci = txt.split(' ');
    // for petlja koja prolazi kroz niz rijeci
    for( var elements of nizRijeci){
        //ako je dužina prvog elementa veca od duzine mog stringa koji je trenutno prazan, onda element smjestam u svoj prazni string. Kako prolazim kroz niz, na kraju ce se najveca rijec smjestiti u niz.
        if(elements.length >= longword.length){
            longword = elements;
        }
    }
    return longword;
}

document.write(` <br><br> Najduža riječ je: ${najduzaRijec(text)}`);