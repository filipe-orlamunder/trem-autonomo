const Trem = require('../src/Trem');

describe('Trem', () => {
    let trem;

    beforeEach(() => {
        trem = new Trem();
    });

    test('Deve mover para a direita e retornar a posição final', () => {
        expect(trem.mover(['DIREITA', 'DIREITA'])).toBe(2);
    });

    test('Deve mover para a esquerda e retornar a posição final', () => {
        expect(trem.mover(['ESQUERDA'])).toBe(-1);
    });

    test('Deve parar após 50 movimentos', () => {
        const comandos = Array(50).fill('DIREITA');
        expect(trem.mover(comandos)).toBe(50);
    });

    test('Deve lançar erro se mais de 20 movimentos consecutivos na mesma direção', () => {
        const comandos = Array(21).fill('DIREITA');
        expect(() => trem.mover(comandos)).toThrow('Mais de 20 movimentos consecutivos na mesma direção');
    });

    test('Deve lançar erro se comando for inválido', () => {
        expect(() => trem.mover(['DIREITA', 'ESQUERDA', 'CIMA'])).toThrow('Comando inválido: CIMA');
    });
});
