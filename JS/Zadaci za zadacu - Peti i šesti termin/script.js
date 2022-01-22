//treba da ispisem sljdece 
/*  XXXXX
    X0XXX
    X0XXX
    X000X
    XXXXX
*/

var tacke = [
    [1,1],
    [1,7],
    [1,11],
    [1,13],
    [1,16],
    [1,17],
    [1,18],
    [2,1],
    [2,6],
    [2,8],
    [2,11],
    [2,13],
    [2,16],
    [2,17],
    [3,1],
    [3,2],
    [3,3],
    [3,7],
    [3,12],
    [3,16],
    [3,17],
    [3,18]
];


for ( var y=0; y<5; y++){
    for(var x=0; x<20; x++){
        var found = false;
        for (var t=0; t<tacke.length; t++){
            var point = tacke[t];//point je opet niz [1,1]
            if(point[0] === y && point[1] === x){
                console.log('tacka pronadjena');
                found = true;
            }

        }
        document.write(found ? '<span style="color:red";>0</span>' : '#');
    }
    document.write('<br>');
}


// sljedeci zadatak nacrtati

/*  *
    **
    ***
    ****
    *****
    ******
*/
document.write('<br>');

function drawMatrix(visina){
    for (var y=0; y<visina; y++){
        for( var x=0; x<=y; x++){
            document.write('*');
        }
        document.write('<br>');
    }
    
}
drawMatrix(10);

//naopako

document.write('<br>');

function drawMatri(h){
    for (var y=0; y<h; y++){
        for( var x=0; x<(h-y); x++){
            document.write('*');
        }
        document.write('<br>');
    }
    
}
drawMatri(10);