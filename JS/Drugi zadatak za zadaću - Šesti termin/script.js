var language = 'en_us';
var locales = {
    'en_us':{
        hello: 'Hello',
        welcome: 'Welcome to our page',
        how_are_you: 'How are you today?'
    },
    'sr_rs':{
        hello: 'Dobar dan',
        welcome: 'Dobro došli na našu stranu',
        how_are_you: 'Kako ste danas?'
    }
}

function fun(ln){
    var sviElementi = document.getElementsByTagName('div');

    for (var i=0; i<sviElementi.length; i++){
        sviElementi[i].innerHTML = locales[ln][sviElementi[i].innerHTML];
    }
    return sviElementi;
}

