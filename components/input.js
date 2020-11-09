export default class Input {
  constructor(type, name, id, labelContent) {
    this.type = type;
    this.name = name;
    this.id = id;
    this.labelContent = labelContent;
  }
  toHtml() {
    throw Error("Must be overridden in subclasses");
  }
}
