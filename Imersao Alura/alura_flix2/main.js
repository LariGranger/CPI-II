function adicionarFilme(){
    var filmeFavorito = document.getElementById('filme').value;
    var elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + `<img src="${filmeFavorito}">`;
    document.getElementById('filme').value = "";
}
//https://s2-techtudo.glbimg.com/dXL1uMCpYdPKYpULv50MJQYir6Q=/0x0:2000x1202/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/u/Y/7rgbnyR8AizUbcIO4wQw/hp-capa.jpg