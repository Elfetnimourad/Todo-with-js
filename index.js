let input = document.querySelector('input[type="text"]');
let btn = document.querySelector("button");
let cl = document.querySelector(".todo-list");
let arr = JSON.parse(localStorage.getItem("arr")) || [];
renderElements();

input.onchange = function (e) {
  let text = e.target.value;
  //arr.push(text);
  console.log(arr);
};
// input.addEventListener("input", function (e) {

// });
//localStorage.setItem("arr", JSON.stringify(arr));

btn.addEventListener("click", function () {
  if (document.querySelector(".input-styling").value !== "") {
    //Removing

    // Editing
    arr.push(document.querySelector(".input-styling").value);

    // localStorage.setItem("arr", JSON.stringify(arr));
    document.querySelector(".input-styling").value = "";
    renderElements();
  }
});

function renderElements() {
  cl.innerHTML = "";
  arr.forEach((text) => {
    let trash = document.createElement("i");
    let edit = document.createElement("i");
    let div = document.createElement("div");
    let headList = document.createElement("h2");

    div.classList.add("div-style");
    trash.classList.add("fa-solid", "fa-trash");
    edit.classList.add("fa-solid", "fa-pen");

    headList.textContent = text;
    div.dataset.value = text;

    div.appendChild(headList);
    div.appendChild(trash);
    div.appendChild(edit);
    cl.appendChild(div);
    localStorage.setItem("arr", JSON.stringify(arr));

    // 🗑️ Trash logic
    trash.addEventListener("click", function () {
      arr = arr.filter((e) => e !== div.dataset.value);
      localStorage.setItem("arr", JSON.stringify(arr));
      div.remove();
    });

    // ✏️ Edit logic
    edit.addEventListener("click", function () {
      let inputed = document.createElement("input");
      inputed.classList.add("input-styling");
      inputed.value = headList.textContent;
      div.appendChild(inputed);

      let saveBtn = document.createElement("button");
      div.appendChild(saveBtn);
      saveBtn.classList.add("fa-solid", "save-btn");
      saveBtn.textContent = "Save";

      edit.classList.add("hidden-element");

      edit.style.display = "none";
      trash.style.display = "none";
      trash.classList.add("hidden-element");
      headList.classList.add("hidden-element");

      div.classList.remove("div-style");
      div.classList.add("div-flex");

      saveBtn.addEventListener("click", function () {
        let updatedText = inputed.value;
        let index = arr.indexOf(text);
        if (index !== -1) {
          arr[index] = updatedText;
          localStorage.setItem("arr", JSON.stringify(arr));
        }

        inputed.remove();
        saveBtn.remove();
        edit.style.display = "flex";
        trash.style.display = "flex";
        headList.textContent = updatedText;
        headList.classList.remove("hidden-element");
        edit.classList.remove("hidden-element");
        trash.classList.remove("hidden-element");

        div.classList.remove("div-flex");
        div.classList.add("div-style");
      });
    });
  });
}
