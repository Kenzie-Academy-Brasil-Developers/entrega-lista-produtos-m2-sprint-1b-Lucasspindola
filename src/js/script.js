let ul = document.querySelector('.ul');
let valorTotal = document.querySelector('.preco');

let inputPesquisar = document.querySelector('#pesquisa');
let btnPesquisar = document.querySelector('.pesquisar');




// Declarando variaveis, arrays com valor de produtos por seção usando filter.
let productsHortifruti = produtos.filter(function (element) {
    if (element.secao == "Hortifruti") {
        return element
    }
})

let productsPanificadora = produtos.filter(function (element) {
    if (element.secao == "Panificadora") {
        return element
    }

})

let productsLaticinio = produtos.filter(function (element) {
    if (element.secao == "Laticínio") {
        return element
    }
})








function renderizarProdutos(objeto, vitrine) {

    for (let i = 0; i < objeto.length; i++) {
        let todosProdutos = objeto[i];

        let criandoCard = criarCard(todosProdutos)

        vitrine.appendChild(criandoCard);

    }

}

renderizarProdutos(produtos, ul);


function criarCard(arrayObjeto) {

    let li = document.createElement('li');
    let imagem = document.createElement('img');
    let fruta = document.createElement('h3');
    let category = document.createElement('span');
    let preco = document.createElement('p');




    imagem.src = arrayObjeto.img;
    fruta.innerText = arrayObjeto.nome;
    category.innerText = arrayObjeto.secao;
    preco.innerText = ` R$${arrayObjeto.preco}`.replace(".", ",")

    li.appendChild(imagem);
    li.appendChild(fruta);
    li.appendChild(category);
    li.appendChild(preco);

    return li;

}




function renderizarCategoria() {

    let btnTodosProdutos = document.querySelector('.todosProdutos');
    let btnHortifruti = document.querySelector('.hortifruti');
    let btnPanificadora = document.querySelector('.panificadora');
    let btnLaticinios = document.querySelector('.laticinios')
    btnTodosProdutos.addEventListener('click', adicionarCategoriaTodos)
    btnHortifruti.addEventListener('click', adicionarCategoriaHortifruti)
    btnPanificadora.addEventListener('click', adicionarCategoriaPanificadora)
    btnLaticinios.addEventListener('click', adicionarCategoriaLaticinios)


    let arrayCategoria = []
    function adicionarCategoriaTodos() {
        inputPesquisar.value =""
        ul.innerHTML = " "
        let valor = produtos.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.preco, 0);
        valorTotal.innerText = ` R$ ${valor}`.replace(".", ",");
        renderizarProdutos(produtos, ul);
    }

    function adicionarCategoriaHortifruti() {
        inputPesquisar.value =""
        ul.innerHTML = " "
        let valor = productsHortifruti.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.preco, 0);
        valorTotal.innerText = ` R$ ${valor}`.replace(".", ",");
        renderizarProdutos(productsHortifruti, ul)

    }

    function adicionarCategoriaPanificadora() {
        inputPesquisar.value =""
        ul.innerHTML = " ";
        let valor = productsPanificadora.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.preco, 0);
        valorTotal.innerText = ` R$ ${valor}`.replace(".", ",");
        renderizarProdutos(productsPanificadora, ul)

    }

    function adicionarCategoriaLaticinios() {
        inputPesquisar.value =""
        ul.innerHTML = " ";
        let valor = productsLaticinio.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.preco, 0);
        valorTotal.innerText = ` R$ ${valor}`.replace(".", ",");
        // laticinioDisplay.classList.add("laticinioDisplay");
        renderizarProdutos(productsLaticinio, ul);

    }



}
renderizarCategoria()


let arrayPesquisa = []
btnPesquisar.addEventListener('click', function () {
    // para não acumular pesquisa, toda vez que clicar vai iniciar vazio.
    
    arrayPesquisa = []


    for (let i = 0; i < produtos.length; i++) {
        
        if (inputPesquisar.value == produtos[i].nome || inputPesquisar.value == produtos[i].nome.toLocaleLowerCase()) {

            arrayPesquisa.push(produtos[i]);

        }


        ul.innerHTML = ""
        valorTotal.innerText = "R$" + arrayPesquisa.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.preco, 0);
        renderizarProdutos(arrayPesquisa, ul);

    }

})












// let mudarDisplay=document.querySelector('.containerListaProdutos')
// if(ul.length == 1){
//     mudarDisplay.classList.add('mudarDisplay');

// }else{
//     mudarDisplay.classList.remove('mudarDisplay')
// }




