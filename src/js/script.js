let ul = document.querySelector('.ul');
let ulCarrinho = document.querySelector('.ulCarrinho');

let inputPesquisar = document.querySelector('#pesquisa');
let btnPesquisar = document.querySelector('.pesquisar');
let arrayProdutosCarrinho = [];
let valorCarrinho = document.querySelector('.totalValor');






function renderizarProdutos(objeto, vitrine) {

    for (let i = 0; i < objeto.length; i++) {
        let todosProdutos = objeto[i];

        let criandoCard = criarCard(todosProdutos)

        vitrine.appendChild(criandoCard);

    }

}

renderizarProdutos(produtos, ul);



let arrayValores
let arrayCarrinho = [];
let valorQuantidadeInformacoes = document.querySelector('.informacoesPrecoEQtd');


function criarCard(arrayObjeto) {

    let li = document.createElement('li');

    let imagem = document.createElement('img');
    let fruta = document.createElement('h3');
    let category = document.createElement('span');
    let preco = document.createElement('p');
    let btnDiv = document.createElement('div');
    let btnComprar = document.createElement('button');
    btnComprar.id = arrayObjeto.id;
    let quantidadeVitrine = document.querySelector('.totalQuantidade');
    valorCarrinho = document.querySelector('.totalValor');

    let telaInformacoes = document.querySelector('.informacoesPrecoEQtd');






    btnComprar.addEventListener('click', (event) => {

        let btnClick = event.target.id;
        const objeto = produtos.find((item) => item.id == btnClick);


        arrayCarrinho.push(objeto);

        // Soma não está atualizando ao remover

        let cont = 0
        valorCarrinho.innerText = `R$${cont},00`

        for (let i = 0; i < arrayCarrinho.length; i++) {
            cont += arrayCarrinho[i].preco

        }
        valorCarrinho.innerText = `R$${cont},00`




        let aux = 0
        for (let i = 0; i < arrayCarrinho.length; i++) {



            aux += arrayCarrinho[i].preco
            // valorCarrinho.innerText= arrayCarrinho.reduce((valorAnterior, elementoAtual) => valorAnterior + elementoAtual.value,0)
            quantidadeVitrine.innerText = arrayCarrinho.reduce((valorAnterior, elementoAtual) => valorAnterior + elementoAtual.value, 0)


        }

        addAndRemoveClass(arrayCarrinho)

        renderizarCarrinho(arrayCarrinho, ulCarrinho);

        quantidadeVitrine.innerText = arrayCarrinho.length;

    })






    let olIngredientes = document.createElement('ol');

    for (let i = 0; i < arrayObjeto.componentes.length; i++) {
        let liIngredientes = document.createElement('li');


        liIngredientes.innerText = arrayObjeto.componentes[i];
        olIngredientes.append(liIngredientes);
    }

    btnComprar.classList.add('btnComprarCurs')
    imagem.classList.add('imagemLi')

    imagem.src = arrayObjeto.img;
    fruta.innerText = arrayObjeto.nome;
    category.innerText = arrayObjeto.secao;
    preco.innerText = ` R$${arrayObjeto.preco}`.replace(".", ",")
    btnComprar.innerText = 'comprar'
    btnDiv.classList.add('btn_Comprar')
    btnDiv.appendChild(preco);
    btnDiv.appendChild(btnComprar);


    li.appendChild(imagem);
    li.appendChild(fruta);
    li.appendChild(category);
    li.append(olIngredientes);
    li.appendChild(btnDiv)
    // li.appendChild(preco);

    return li;

}



function renderizarCarrinho(array, vitrine) {
    vitrine.innerHTML = "";
    for (let i = 0; i < array.length; i++) {

        let todosProdutosCarrinho = array[i];
        let arrayLoop = criarCardCarrinho(todosProdutosCarrinho);
        vitrine.append(arrayLoop);

    }

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
        inputPesquisar.value = ""
        ul.innerHTML = " "

        renderizarProdutos(produtos, ul);
    }

    function adicionarCategoriaHortifruti() {
        inputPesquisar.value = ""
        ul.innerHTML = " "

        let hortifrutiProdutos = produtos.filter((item) => item.secao === "Hortifruti")
        renderizarProdutos(hortifrutiProdutos, ul)

    }

    function adicionarCategoriaPanificadora() {
        inputPesquisar.value = ""
        ul.innerHTML = " ";

        let panificadoraProdutos = produtos.filter((item) => item.secao === "Panificadora")
        renderizarProdutos(panificadoraProdutos, ul)

    }

    function adicionarCategoriaLaticinios() {
        inputPesquisar.value = ""
        ul.innerHTML = " ";



        let laticiniosProdutos = produtos.filter((item) => item.secao === "Laticinio")
        addAndRemoveClass(arrayCarrinho)
        renderizarProdutos(laticiniosProdutos, ul);

    }



}
renderizarCategoria()


let arrayPesquisa = []
btnPesquisar.addEventListener('click', function () {


    arrayPesquisa = []


    for (let i = 0; i < produtos.length; i++) {

        if (inputPesquisar.value == produtos[i].nome || inputPesquisar.value == produtos[i].nome.toLocaleLowerCase() ||
            inputPesquisar.value == produtos[i].secao || inputPesquisar.value.toLocaleLowerCase() == produtos[i].secao.toLocaleLowerCase() ||
            inputPesquisar.value == produtos[i].categoria || inputPesquisar.value.toLocaleLowerCase() == produtos[i].categoria.toLocaleLowerCase()) {

            arrayPesquisa.push(produtos[i]);

        }


        ul.innerHTML = "";


        renderizarProdutos(arrayPesquisa, ul);
        addAndRemoveClass(arrayCarrinho)

    }

})


let arrayValor = []

function criarCardCarrinho(array) {

    let liCar = document.createElement('li');
    let imgCar = document.createElement('img');
    let containerInfCarrinho = document.createElement('div');
    let h3 = document.createElement('h3');
    let span = document.createElement('span');
    let pPreco = document.createElement('p');
    let imgIconLixeira = document.createElement('img');
    span.classList.add('secaoCarrinho')
    liCar.classList.add('liCar');
    imgCar.classList.add('imgCarrinho');
    containerInfCarrinho.classList.add('containerInformacoesCarrinho')
    imgIconLixeira.classList.add('imgLixeira')
    imgCar.src = array.img;
    h3.innerText = array.nome;
    span.innerText = array.secao;
    imgIconLixeira.src = "./src/img/lixeiraCarrinho.png"
    pPreco.innerText = `R$ ${array.preco}`.replace(".", ",");
    imgIconLixeira.id = array.id;


    imgIconLixeira.addEventListener('click', (event) => {

        let btnClickLixeira = event.target.id;
        let quantidadeVitrine = document.querySelector('.totalQuantidade');
        let valorTotalCarrinho = document.querySelector('.totalValor');


        let objeto = arrayCarrinho.findIndex((item) => item.id == btnClickLixeira);

        arrayCarrinho.splice(objeto, 1);


        let cont = 0
        valorCarrinho.innerText = `R$${cont},00`

        for (let i = 0; i < arrayCarrinho.length; i++) {
            cont += arrayCarrinho[i].preco

        }
        valorCarrinho.innerText = `R$${cont},00`


        renderizarCarrinho(arrayCarrinho, ulCarrinho);
        addAndRemoveClass(arrayCarrinho)

        quantidadeVitrine.innerText = arrayCarrinho.length;






        //   console.log(valorTotalCarrinho) socorrooo

    })

    containerInfCarrinho.append(h3);
    containerInfCarrinho.append(span);
    containerInfCarrinho.append(pPreco);

    liCar.append(imgCar)
    liCar.append(containerInfCarrinho);
    liCar.append(imgIconLixeira);






    return liCar


}



function addAndRemoveClass(array) {

    if (array.length == 0) {
        valorQuantidadeInformacoes.classList.add('teste');

    }
    if (array.length !== 0) {
        valorQuantidadeInformacoes.classList.remove('teste')

    }

}

addAndRemoveClass(arrayCarrinho)












































