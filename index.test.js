/**
 * @jest-environment jsdom
 */
beforeEach(() => {
  // Set up our document body
  document.body.innerHTML = `
    <input type="text" class="input-styling" />
    <button>Add</button>
    <div class="todo-list"></div>
  `;
  // Clear localStorage
  localStorage.clear();
  // Re-require the code to re-run setup
  require("./index.js");
});

test("use jsdom in this test file", () => {
  const input = document.querySelector(".input-styling");
  const button = document.querySelector("button");
  input.value = "Test todo";
  button.click();

  const todos = document.querySelectorAll(".todo-list .div-style h2");
  expect(todos.length).toBe(1);
  expect(todos[0].textContent).toBe("Test todo");
  expect(input.textContent).not.toBeNull();
});
test("use jsdom in this test file", () => {
  const input = document.querySelector(".input-styling");
  const button = document.querySelector("button");
  input.value = "Test todo";
  button.click();

  const todos = document.querySelectorAll(".todo-list .div-style h2");
  expect(input.value).toBe("Test todo");

  expect(todos[0]).toBeUndefined();
});
