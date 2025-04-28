let input = document.querySelector('input[type="text"]');
let btn = document.querySelector("button");
let cl = document.querySelector(".todo-list");

let arr = JSON.parse(localStorage.getItem("arr")) || [];

input.onchange = function (e) {
  let text = e.target.value;
  arr.push(text);
  console.log(arr);
};
// input.addEventListener("input", function (e) {

// });

btn.addEventListener("click", function () {
  localStorage.setItem("arr", JSON.stringify(arr));

  if (
    document.querySelector(".input-styling").value !== "" &&
    arr.length !== 0
  ) {
    let trash = document.createElement("i");
    let edit = document.createElement("i");
    let text = input.value;
    // add to localStorage

    // var myTrash = document.querySelector("i").cloneNode(true);
    let div = document.createElement("div");
    let headList = document.createElement("h2");
    div.classList.add("div-style");
    trash.classList.add("fa-solid", "fa-trash");
    edit.classList.add("fa-solid", "fa-pen");

    div.appendChild(headList);
    div.appendChild(trash);
    div.appendChild(edit);
    cl.appendChild(div);

    headList.textContent = text;
    div.dataset.value = text;
    //Removing
    trash.addEventListener("click", function () {
      console.log("from trash", div.firstChild.textContent);
      arr = arr.filter((e) => e !== div.firstChild.textContent);
      console.log("array trash", arr);
      div.remove(); // Optional: remove the todo item
    });
    // Editing
    edit.addEventListener("click", function () {
      //input for Editing
      let inputed = document.createElement("input");
      inputed.classList.add("input-styling");
      inputed.value = div.firstChild.textContent;
      inputed.setAttribute("placeholder", "You Want To Edit");
      div.appendChild(inputed);

      // save button
      let saveBtn = document.createElement("button");
      div.appendChild(saveBtn);
      saveBtn.classList.add("fa-solid", "save-btn");
      saveBtn.textContent = "Save";
      console.log(div.firstChild.textContent);
      edit.classList.add("hidden-element");
      trash.classList.add("hidden-element");
      headList.classList.add("hidden-element");
      trash.remove();
      edit.remove();
      console.log("from edit", div.firstChild.textContent);
      console.log("dataset", div.dataset.value);
      div.classList.remove("div-style");
      div.classList.add("div-flex");
      // inputed.onchange = function (e) {
      //   console.log("cha");
      //   console.log("from cha", e.target.value);
      //   //e.target.value = div.firstChild.textContent;
      // };
      inputed.addEventListener("input", function (e) {
        console.log("cha 2 ");
        console.log("from input akhoya", e.target.value);
        headList.textContent = e.target.value;
        let savedText = e.target.value;
        arr = arr.map((c) => {
          if (c !== savedText) {
            return savedText;
          } else {
            return c;
          }
        });
        console.log(arr);
        // arr = arr.map((e) => {
        //   if (e === div.firstChild.textContent) {
        //     console.log("hhhhh");
        //     return "gggggggggggggg";
        //   } else {
        //     return e;
        //   }
        // });

        // inputed.classList.add("hidden-element");
        // saveBtn.classList.add("hidden-element");
      });
      saveBtn.addEventListener("click", function () {
        edit.classList.remove("hidden-element");
        trash.classList.remove("hidden-element");
        headList.classList.remove("hidden-element");
        div.classList.remove("hidden-element");
        inputed.remove();
        saveBtn.remove();
        div.classList.add("div-style");
        trash.classList.add("fa-solid", "fa-trash");
        edit.classList.add("fa-solid", "fa-pen");

        div.appendChild(headList);
        div.appendChild(trash);
        div.appendChild(edit);
        // arr.push(savedText);
        console.log("from saving button");
      });
    });

    arr.map((e, c) => {
      headList.textContent = e;
    });
    console.log(arr);
    document.querySelector(".input-styling").value = "";
    return arr;
  }
});
window.onload = function (e) {
  e.preventDefault();
};
console.log("for nothing happen", arr);
