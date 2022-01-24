var heroji =[
    {id:1, name:'Black Widow', description:'Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 24th film in the Marvel Cinematic Universe (MCU). The film was directed by Cate Shortland from a screenplay by Eric Pearson, and stars Scarlett Johansson as Natasha Romanoff', img: 'img/black-widow.jpg'},
    {id:2, name:'Iron Man', description:'Iron Man is a 2008 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[N 1] it is the first film in the Marvel Cinematic Universe (MCU). Directed by Jon Favreau from a screenplay by the writing teams of Mark Fergus and Hawk Ostby, and Art Marcum and Matt Holloway, the film stars Robert Downey Jr. as Tony Stark / Iron Man alongside Terrence Howard, Jeff Bridges, Shaun Toub, and Gwyneth Paltrow. In the film, following his escape from captivity by a terrorist group, world famous industrialist and master engineer Tony Stark builds a mechanized suit of armor and becomes the superhero Iron Man.', img: 'img/Iron_Man.png'},
    {id:3, name:'Captain America', description:'Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication.', img: 'img/R.png'  }
];

function createTable(data){
var myTable = document.querySelector('#table')
var headers = ['Id', 'Name', 'Description', 'Image']

var table = document.createElement('table');
var headerRow = document.createElement('tr');
console.log(table);

for(var headName of headers){

    var headerCol = document.createElement('th');
    headerCol.innerHTML = headName;
    headerRow.appendChild(headerCol);
}
table.appendChild(headerRow);

for (var i=0; i<data.length; i++){
    var heroj = data[i];//objekat
    var bodyRows  = document.createElement('tr');
    var idcell = document.createElement('td');
    idcell.innerHTML = heroj.id;
    var namecell = document.createElement('td');
    namecell.innerHTML = heroj.name;
    var descriptioncell = document.createElement('td');
    descriptioncell.innerHTML = heroj.description;
    var imgcell = document.createElement('td');
    var herojImg = document.createElement('img');
    herojImg.src = heroj.img;
    imgcell.appendChild(herojImg);
    
    bodyRows.appendChild(idcell);
    bodyRows.appendChild(namecell);
    bodyRows.appendChild(descriptioncell);
    bodyRows.appendChild(imgcell);
    table.appendChild(bodyRows);
}
myTable.appendChild(table);
}

