// eslint-disable-next-line quotes
import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdown, events) {
    this.dropdownMenus = document.querySelectorAll(dropdown);
    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    //define touchstart e click como argumento padrao
    //de events caso o usuario não defina
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
  }
  //Ativa o dropdownmenu e adiciona a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }
  //Adiona os eventos do dropdownmenu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
