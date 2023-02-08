let titulo = document.getElementsByTagName ('h1');
//console.log(titulo);
//console.log("Paulo");
console.log(titulo[0]);
let lista = document.getElementsByTagName('li');
console.log(lista);
let listaDois = document.getElementsByClassName('item-lista');
console.log(listaDois);
let paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);
//querySelector ou querySelectorAll

//querySelector é para navegar e deve colocar nome 'mãe e dos itens
let lis = document.querySelector('#outra-lista .item-lista2');
console.log("Lista usando querySelector");
console.log(lis);
console.log("Lista usando querySelectorAll");
let lisTodos = document.querySelectorAll('#outra-lista .item-lista2');
console.log(lisTodos);

//sucos e refrigerantes
let fraseDaLista = document.querySelector('#produtos #paragrafo-lista')
console.log(fraseDaLista);