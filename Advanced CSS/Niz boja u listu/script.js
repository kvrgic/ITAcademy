// treba prikazati broje u obliku ul liste

var colors = ['red', 'blue', 'black', 'orange'];

var list = document.getElementById('myList')
for ( var color of colors){
    var li = document.createElement('li');
    li.innerHTML = color;
    list.appendChild(li)
}
document.body.appendChild(list);