var arr1 = 'Hello World ';
var arr2 = 'Froma Jamaica';

var arr3 = arr1.concat(arr2);
var splitArr3 = arr3.split('');



for(var i = 0; i < splitArr3.length; i++){
    if(i % 2 !== 0){
        splitArr3[i] = `<span class="clr">${splitArr3[i]}</span>`;
    }
    
}
document.write(splitArr3.join(''));
