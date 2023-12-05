listaFilmes = ['https://i0.wp.com/viventeandante.com/wp-content/uploads/2020/10/SOUL-filme-disney.jpg?fit=743%2C1100&ssl=1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhdBsca4U97cc3WQLvLCMFppEYxBUYkjdkJe9pbqO8W07T-oX8SJkUiIrYKkyA9Xqqvs&usqp=CAU', 'https://jpimg.com.br/uploads/2018/04/dragon-ball-z.jpg']
listaNomeFilmes = ['Soul', 'Harry Potter', 'Dragon Ball Z']

//listaFilmes[0] = 'https://i0.wp.com/viventeandante.com/wp-content/uploads/2020/10/SOUL-filme-disney.jpg?fit=743%2C1100&ssl=1';
var tamanho = listaFilmes.length;
var i=0;
while(i<tamanho){
    document.write('<img src=' + listaFilmes[i] + '>');
    document.write(listaNomeFilmes[i]);
    i++;
    
}



/*for(i=0;i<listaFilmes.length;i++){
    document.write('<img src=' + listaFilmes[i] + '>');
}*/
