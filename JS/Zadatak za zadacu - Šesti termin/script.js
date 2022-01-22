var visina = + prompt('Unesi visinu matrice:');
var širina = + prompt('Unesi širinu matrice:');
var nizKoordinata = [];
while (true){
    var koordinataY = prompt('Unesite koordinatu y:');
    var koordinataX = prompt('Unesite koordinatu x:');

    if(koordinataY == '' || koordinataY == ''){
        break;
    }

    nizKoordinata.push([koordinataY,koordinataX]);
}
console.log(nizKoordinata);
for (var y=0; y<visina; y++){
    for (var x=0; x<širina; x++){
        
        var found = false;
        for(var k=0; k<nizKoordinata.length; k++){
            var point = nizKoordinata[k]; //point mi je sad neka koordinata
            if(point[0] == y && point[1] == x){
                found = true;
            }
        }
        document.write(found? '0': '#')
    }
    document.write('<br>');
}

