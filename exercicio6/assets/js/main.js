function main(){
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let minutos = 0;
    let horas = 0;
    let timer;

    function zeroAEsquerda(numero){
        if (numero < 10) {
            numero = `0${numero}`;
        }
        return numero;
    }

    function passaTempo() {
        segundos ++;
        if (segundos == 60){
            segundos = 0;
            minutos++;
        }
        if (minutos == 60){
            minutos = 0;
            horas++;
        }

        segundos = Number(segundos)
        minutos = Number(minutos)
        horas = Number(horas)
        segundos = zeroAEsquerda(segundos);
        minutos = zeroAEsquerda(minutos);
        horas = zeroAEsquerda(horas);
        return `${horas}:${minutos}:${segundos}`
    }

    function iniciaTimer() {
        timer = setInterval(function () {
            relogio.innerHTML = passaTempo();
        }, 1000);
        setTimeout(function() {
            clearInterval(timer);
        }, 82800000);
    }

    document.addEventListener('click', function(e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            clearInterval(timer);
            iniciaTimer();
            relogio.classList.remove('pausado');
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            minutos = 0;
            horas = 0;
            relogio.classList.remove('pausado');
        }
    })

}

main();
