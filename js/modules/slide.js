export default class NavChange {
  constructor(nav, img, text) {
    this.nav = document.querySelector(nav);
    this.img = document.querySelector(img);
    this.text = document.querySelector(text);
    this.activeClass = 'active';
  }

  navIndex() {
    const nav = [...this.nav.children];
    nav.forEach((item, index) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        this.removeActiveClass();
        this.addActiveClass(item)
        this.imgChange(index);
        this.textChange(index);
      });
    });
  }

  imgChange(id) {
    const img = [...this.img.children];
    img.forEach((item, index) => {
      if (index === id) {
        this.img.querySelector(`.${this.activeClass}`)?.classList.remove(this.activeClass);
        this.addActiveClass(item);
      }
    });
  }

  textChange(id) {
    const text = [...this.text.children];
    text.forEach((item, index) => {
      if (index === id) {
        this.addActiveClass(item);
      }
    });
  }

  removeActiveClass() {
    this.nav.querySelector(`.${this.activeClass}`)?.classList.remove(this.activeClass);
    this.img.querySelector(`.${this.activeClass}`)?.classList.remove(this.activeClass);
    this.text.querySelector(`.${this.activeClass}`)?.classList.remove(this.activeClass); 
  }
  
  addActiveClass(item) {
    item.classList.add(this.activeClass);
  }


  init() {
    this.navIndex();
  }
}





