function ValidaCPF(cpf) {
    Object.defineProperty(this, 'cpfString', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfString === 'undefined') return false;
    if (this.cpfString.length !== 11) return false;
    if (this.eSequencia()) return false;

    const cpfPuro = this.cpfString.slice(0, -2);
    const digito1 = this.criaDigito(cpfPuro);
    const digito2 = this.criaDigito(cpfPuro + digito1);

    const novoCpf = cpfPuro + digito1 + digito2;
    return novoCpf === this.cpfString;
}

ValidaCPF.prototype.criaDigito = function (cpfPuro) {
    const cpfArray = Array.from(cpfPuro);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
}

ValidaCPF.prototype.eSequencia = function() {
    const sequencia = this.cpfString[0].repeat(this.cpfString.length);
    return sequencia === this.cpfString;
}

const cpf = new ValidaCPF('615.812.546-08');

if (cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}