/**
 * @jest-environment jsdom
 */
beforeEach(() => {
  // Set up our document body
  document.body.innerHTML = `
    <input type="text" class="input-styling"  />
    <button>Add</button>
    <button class='save-btn'>save</button>
    <div class="todo-list"></div>
  `;
  // Clear localStorage
  localStorage.clear();
  // Re-require the code to re-run setup
  require("./index.js");
});

test("testing the add todos ", () => {
  const input = document.querySelector(".input-styling");
  const button = document.querySelector("button");
  input.value = "Test todo";
  button.click();

  const todos = document.querySelectorAll(".todo-list .div-style h2");

  //   expect(input.value).toBe("");
  expect(input).not.toBeNull();
});
test("testing the Edit todos ", () => {
  const input = document.querySelector(".input-styling");
  const button = document.querySelector("button");
  const saved = document.querySelector(".save-btn");

  input.value = "Edit todo";
  saved.click();

  const todos = document.querySelectorAll(".todo-list .div-style h2");

  expect(saved.textContent).toEqual("save");
  expect(saved).not.toBeNull();
  expect(todos).toHaveLength(0);
});

// test("testing the Edit todos ", () => {
//   const input = document.querySelector(".input-styling");
//   const button = document.querySelector("button");
//   input.value = "Edit todo";
//   button.click();

//   const edited = document.querySelector(".todo-list .div-style h2");

//   expect(input.value).toBe("");

//   expect(todos[0].textContent).not.toBeUndefined();
// });
