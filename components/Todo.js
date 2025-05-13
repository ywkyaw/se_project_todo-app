class Todo {
  constructor(data, selector) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }
  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });

    this._deleteTodoBtn.addEventListener("click", () => {
      this._todoElement.remove();
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _deleteTodoBtn() {
    this._deleteTodoBtn = this._todoElement.querySelector(".todo__delete-btn");
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    todoDate.textContent =
      this._data.date == "Invalid Date"
        ? null
        : `Due: ${this._data.date.toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}`;

    // if (this._data.date == "Invalid Date")
    // {
    //   todoDate.textContent = "";
    // }
    // else{
    //   todoDate.textContent = `Due: ${this._data.date.toLocaleString("en-US", {
    //         year: "numeric",
    //         month: "short",
    //         day: "numeric",
    //       })}`;
    // }
    // todoDate.textContent = `Due: ${this._data.date.toLocaleString("en-US", {
    //   year: "numeric",
    //   month: "short",
    //   day: "numeric",
    // })}`;

    this._deleteTodoBtn();
    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
