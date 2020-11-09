import Input from "./input";

export default class TextInput extends Input {
  constructor(type, name, id, labelContent, err) {
    super(type, name, id, labelContent);
    this.err = err;
  }
  toHtml() {
    return `<label for="${this.name}">${this.labelContent}</label><br />
      <input type="date" id="${this.name}" name="${this.name}l" required/><br /><br />`;
  }
}
//
