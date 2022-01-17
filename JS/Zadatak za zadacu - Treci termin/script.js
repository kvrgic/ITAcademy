// imamo 
var text = 'RIMAC';

//trebamo da transformisemo ovaj text tako da pise ACIMR

//prvo pretvaramo string u niz

var arr = text.split('');
console.log(arr);

//zatim sortiramo taj niz

var sortArr = arr.sort();
console.log(sortArr);

//za kraj ponovo vratimo niz u string

var sortString = sortArr.join('');
document.write(sortString);