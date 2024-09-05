export default class AnimaNumeros {
  constructor(numeros, observerClass, observerTarget) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerClass = observerClass;
    this.observerTarget = document.querySelector(observerTarget);

    this.handleMutation = this.handleMutation.bind(this);
  }
  // REcebe elemento do DOM com o numero em seu texto//
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }
  /*Adiciona o MutationObserver para verificar quando a classe ativo é adicionada ao elemento target*/
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
