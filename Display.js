class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
    }

    agregarNumero(numero) {
        this.valorActual = numero;
    }

}

