var prvi = document.getElementById('prviDiv');
var drugi = document.getElementById('drugiDiv');


function change(){
var textDrugog = drugi.innerHTML;
var bojaDrugog = drugi.style.backgroundColor;
var textPrvog = prvi.innerHTML;
var bojaPrvog = prvi.style.backgroundColor;

drugi.innerHTML = textPrvog;
drugi.style.background = bojaPrvog;
prvi.innerHTML = textDrugog;
prvi.style.background = bojaDrugog;
}


