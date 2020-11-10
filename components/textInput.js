import Input from "./input";

export default class TextInput extends Input {
  constructor(type, name, id, labelContent, isErr) {
    super(type, name, id, labelContent);
    this.isErr = isErr;
  }
  toHtml() {
    return `
    <label for="newTaskName" class="sr-only">Add new task</label>
  <input  type="text"
      class="my-0 form-control ${
        state.err["newTaskName"] ? "alert alert-warning" : ""
      }"
      name="newTaskName"
      value="${state.formInput}"
      placeholder="Add a new task"/>
    
    <label for="${this.name}" class="sr-only">${this.labelContent}</label><br />
      <input type="date" id="${this.name}" name="${
      this.name
    }l" required/><br /><br />`;
  }
}
//
