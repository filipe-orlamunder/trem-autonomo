const Trem = require('./Trem');

const comandos = ['DIREITA', 'DIREITA', 'ESQUERDA', 'ESQUERDA', 'DIREITA', 'DIREITA'];
const trem = new Trem();

try {
    const posicaoFinal = trem.mover(comandos);
    console.log('Posição Final do Trem:', posicaoFinal);
} catch (error) {
    console.error('Erro:', error.message);
}
