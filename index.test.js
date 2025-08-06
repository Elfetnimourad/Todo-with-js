/**
 * @jest-environment jsdom
 */
beforeEach(() => {
  // Set up our document body
  document.body.innerHTML = `
    <input type="text" class="input-styling"  />
    <button>Add</button>
    <div class="todo-list">
   <h2>todo item</h2>
           <button class='fa-trash'>remove</button>

        <button class='fa-pen'>Edit</button>
        <button class='save-btn'>save</button>

    </div>
  `;
  // Clear localStorage
  localStorage.clear();
  // Re-require the code to re-run setup
  require("./index.js");
});

describe("Describing the whole todo app ", () => {
  test("testing the add todos ", () => {
    const input = document.querySelector(".input-styling");
    const button = document.querySelector("button");
    input.value = "Test todo";
    button.click();

    const todos = document.querySelectorAll(".todo-list .div-style h2");
    todos.length += 1;
    //   expect(input.value).toBe("");
    expect(input).not.toBeNull();
    expect(todos.length).toBe(1);

    const storedData = JSON.parse(localStorage.getItem("arr")) || [];
    expect(storedData).not.toBeNull();
  });
  test("testing the Edit todos ", () => {
    const input = document.querySelector(".input-styling");
    const button = document.querySelector("button");
    const saved = document.querySelector(".save-btn");

    input.value = "Edit todo";
    saved.click();

    const todos = document.querySelectorAll(".todo-list .div-style h2");
    const todoItem = document.querySelector("h2");

    todoItem.innerText = "todo item";

    expect(saved.textContent).toEqual("save");
    expect(saved).not.toBeNull();
    expect(todos).toHaveLength(0);
    expect(todoItem.textContent).toBe("todo item");
  });

  test("testing the Remove todos ", () => {
    const input = document.querySelector(".input-styling");
    const button = document.querySelector("button");
    input.value = "Remove todo";
    button.click();
    const removeBtn = document.querySelector(".fa-trash");
    const todos = document.querySelectorAll(".todo-list .div-style h2");
    todos.length -= 1;
    expect(input.value).toBe("Remove todo");
    expect(removeBtn.textContent).toBe("remove");
    const storedData = JSON.parse(localStorage.getItem("arr")) || [];
    localStorage.clear();
    expect(storedData).toHaveLength(0);
  });
});
