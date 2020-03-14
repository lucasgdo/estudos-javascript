function main() {
    function criaTitulo() {
        const titulo = document.createElement('h1');
        return titulo;
    }

    const dataAtual = new Date();
    let diaDaSemana = dataAtual.getDay();
    switch (diaDaSemana) {
        case 0:
            diaDaSemana = 'Domingo';
            break;
        case 1:
            diaDaSemana = 'Segunda-feira';
            break;
        case 2:
            diaDaSemana = 'Terça-feira';
            break;
        case 3:
            diaDaSemana = 'Quarta-feira';
            break;
        case 4:
            diaDaSemana = 'Quinta-feira';
            break;
        case 5:
            diaDaSemana = 'Sexta-feira';
            break;
        case 6:
            diaDaSemana = 'Sábado';
            break;
    }
    
    const diaDoMes = dataAtual.getDate();
    let mes = dataAtual.getMonth();

    switch (mes) {
        case 0:
            mes = 'janeiro';
            break;
        case 1:
            mes = 'fevereiro';
            break;
        case 2:
            mes = 'março';
            break;
        case 3:
            mes = 'abril';
            break;
        case 4:
            mes = 'maio';
            break;
        case 5:
            mes = 'junho';
            break;
        case 6:
            mes = 'julho';
            break;
        case 7:
            mes = 'agosto';
            break;
        case 8:
            mes = 'setembro';
            break;
        case 9:
            mes = 'outubro';
            break;
        case 10:
            mes = 'novembro';
            break;
        case 11:
            mes = 'dezembro';
            break;
    }

    const ano = dataAtual.getFullYear();
    const hora = `${zeroAEsquerda(dataAtual.getHours())}:${zeroAEsquerda(dataAtual.getMinutes())}`;


    function zeroAEsquerda(numero){
        if (numero < 10) {
            numero = `0${numero}`;
        }

        return numero;
    }

    const texto = document.querySelector('.container');
    texto.innerHTML = '';
    const titulo = criaTitulo();
    titulo.innerHTML = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano} ${hora}`
    texto.appendChild(titulo);
}

main();