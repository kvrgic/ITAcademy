var sviParagrafi = document.getElementsByTagName('p');

for (var i=0; i<sviParagrafi.length; i++){

    if(sviParagrafi[i].innerHTML.indexOf("COVID-19")>0){
       sviParagrafi[i].innerHTML = sviParagrafi[i].innerHTML.replaceAll('COVID-19', `<span class="clr">COVID-19</span>`);
    } 
}
function clearSelect(){
    console.log('Selekt je u fokusu');

    
}
function selectWord(){
    var searchValue = document.getElementById('search');
    console.log(searchValue.value);
    for (var i=0; i<sviParagrafi.length; i++){

        if(sviParagrafi[i].innerHTML.indexOf(searchValue.value)>0){
           sviParagrafi[i].innerHTML = sviParagrafi[i].innerHTML.replaceAll(`${searchValue.value}`, `<span class="clr">${searchValue.value}</span>`);
        } 
    }
}

function replaceWord(){
    var searchValue = document.getElementById('search');
    var enterText = document.getElementById('enterText');
    console.log(enterText.value);
    for (var i=0; i<sviParagrafi.length; i++){

        if(sviParagrafi[i].innerHTML.indexOf(searchValue.value)>0){
           sviParagrafi[i].innerHTML = sviParagrafi[i].innerHTML.replaceAll(`${searchValue.value}`, `<span class="clr">${enterText.value}</span>`);
        } 
    }
}
