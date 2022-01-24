function validateField(){
    var inputBorder = document.getElementById('jmbg');
    console.log(inputBorder.value);
        if(isNaN(inputBorder.value)){
            console.log('ima teksta')
            inputBorder.style.border = '2px solid red';
        }else{
            console.log('nema teksta samo su brojevi')
            inputBorder.style.border = '2px solid black';
        }
}
