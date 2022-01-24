var kramarAutomobili = [
    {img: 'img/Prvo.jpg', naslov: 'Peugeot 5008 1.6 BlueHDI Tiptronik Allure Sport 7-Sjedišta VIRTUAL COCKPIT-Novi', cijena: '39,990.00', cijenaSaPDV: '44,990.00', godina: '2018', kilometri: '146 247'},
    {img: 'img/Drugo.jpg', naslov: 'Mercedes-Benz S 400 D Long 4Matic AMG Line - Novi model', cijena: '222,990.00', cijenaSaPDV: '259,990.00', godina: '2021', kilometri: '26 872'},
    {img: 'img/trece.jpg', naslov: 'Mercedes-Benz AMG GT 53 4Matic+ 4 Doors 435 KS', cijena: '192,990.00', cijenaSaPDV: '224,990.00', godina: '2020', kilometri: '12 134'},
    {img: 'img/R.jpg', naslov: 'Citroen C4 1.6 BlueHDI Exclusive Millenium - FACELIFT', cijena: '18,990.00', cijenaSaPDV: '21,990.00', godina: '2017', kilometri: '99 784'},
];

var najnovije = document.getElementById('noviNaLageru');
najnovije.innerHTML = "Najnovije na lageru"
najnovije.className = 'novo';

function slideri(data){
    var sveKartice = document.querySelector('#wrapper');
    for(var i=0; i<data.length; i++){
        var auto = data[i]; //jedno auto, jedan objekat
        console.log(auto);

        var kartica = document.createElement('div');
        console.log(kartica)
        kartica.className = 'card';
        var slikaAuta = document.createElement('img');
        slikaAuta.src = auto.img;
        var naslov = document.createElement('h1');
        naslov.innerHTML = auto.naslov;

        var kartCijena = document.createElement('div');
        var cijena = document.createElement('p');
        cijena.innerHTML = `CIJENA KM: ${auto.cijena}`;
        var cijenaSaPDV = document.createElement('p');
        cijenaSaPDV.innerHTML = `CIJENA KM+PDV: ${auto.cijenaSaPDV}`;
        kartCijena.className = 'kartCijena';
        kartCijena.appendChild(cijena);
        kartCijena.appendChild(cijenaSaPDV);

        var godina = document.createElement('p');
        godina.innerHTML = `GODINA: ${auto.godina}`;
        godina.className = 'vozilo_detalji_godina'
        var kilometri = document.createElement('p');
        kilometri.innerHTML = `KILOMETRI ${auto.kilometri}`;
        kilometri.className = 'vozilo_detalji_kilometri';
        
        kartica.appendChild(slikaAuta);
        kartica.appendChild(naslov);
        kartica.appendChild(kartCijena);
        kartica.appendChild(godina);
        kartica.appendChild(kilometri);
        sveKartice.appendChild(kartica);
    }
    
}