class Trem {
    constructor() {
        this.posicao = 0;
        this.movimentos = [];
    }

    mover(comandos) {
        let direcaoAtual = null;
        let contadorDirecao = 0;

        for (let comando of comandos) {
            if (comando !== 'ESQUERDA' && comando !== 'DIREITA') {
                throw new Error('Comando inválido: ' + comando);
            }

            if (comando === direcaoAtual) {
                contadorDirecao++;
            } else {
                direcaoAtual = comando;
                contadorDirecao = 1;
            }

            if (contadorDirecao > 20) {
                throw new Error('Mais de 20 movimentos consecutivos na mesma direção');
            }

            this.movimentos.push(comando);

            if (comando === 'ESQUERDA') {
                this.posicao--;
            } else if (comando === 'DIREITA') {
                this.posicao++;
            }

            if (this.movimentos.length >= 50) {
                break;
            }
        }
        return this.posicao;
    }
}

module.exports = Trem;
