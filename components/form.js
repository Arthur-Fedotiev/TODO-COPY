class ModalForm {
  constructor() {
    this.items = [];
  }
  add() {
    this.items.push(item);
  }
  render(el) {
    el.innerHTML = this.items.map((item) => item.toHtml()).join("");
  }
}
