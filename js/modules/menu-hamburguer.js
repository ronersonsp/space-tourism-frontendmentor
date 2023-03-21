export default class Menu {
  constructor(btn, nav) {
    this.btn = document.querySelector(btn);
    this.nav = document.querySelector(nav);
    this.activeClass = 'active';
    this.addEvents();
  }

  addEvents() {
    this.btn.addEventListener('click', () => {
      this.btn.classList.toggle(this.activeClass);
      this.nav.classList.toggle(this.activeClass);
    })
  }
}