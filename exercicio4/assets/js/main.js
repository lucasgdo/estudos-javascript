function main() {
    const texto = document.querySelector('.container');
    const elementos = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag : 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];

    const div = criaDiv();
    for(let i=0; i<elementos.length ; i++) {
        let elemento = elementos[i].tag;
        let textoElemento = elementos[i].texto;
        let elementoCriado = document.createElement(elemento);
        elementoCriado.innerHTML = textoElemento;
        div.appendChild(elementoCriado);
    }

    texto.appendChild(div);

    function criaDiv() {
        const div = document.createElement('div');
        return div;
    }
}

main();