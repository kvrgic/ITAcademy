function validateField(){
    var inputBorder = document.getElementById('jmbg');

        if(isNaN(inputBorder.value)){
            
            inputBorder.style.border = '2px solid red';
        }else{
            inputBorder.style.border = '2px solid black';
        }
}
