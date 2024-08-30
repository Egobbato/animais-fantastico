export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adiciona os eventos ao accordion
  addAcordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  //Iniciar função
  init() {
    if (this.accordionList.length) {
      //ativar o primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAcordionEvent();
    }
  }
}
