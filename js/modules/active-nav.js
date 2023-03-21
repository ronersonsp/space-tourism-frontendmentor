export default class ActiveNav {
  constructor(section, nav) {
    this.section = document.querySelectorAll(section);
    this.nav = document.querySelector(nav);
    this.activeClass = 'active';
  }

  getDistance() {
    const lista = [...this.section];
    lista.forEach((item, index) => {
      const distanceTop = item.getBoundingClientRect().top;
      const heightWindowNegative = -(window.innerHeight * 0.4);
      const heightWindowPositive = (window.innerHeight * 0.3);
      if (distanceTop > heightWindowNegative && distanceTop < heightWindowPositive) {
        this.updateNavActiveClass(index);
      }
    });
  }

  updateNavActiveClass(index) {
    const navItems = this.nav.querySelectorAll('li');
    navItems.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    navItems[index].classList.add(this.activeClass);
  }

  addEvent() {
    window.addEventListener('scroll', this.getDistance);
  }

  addBinds() {
    this.getDistance = this.getDistance.bind(this);
  }

  init() {
    this.addBinds();
    this.addEvent();
  }

}