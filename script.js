const list = document.querySelector("ul");
const btn = document.querySelector(".btn");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

btn.addEventListener("click", newElement);

function newElement() {
  const inputValue = document.querySelector(".text");
  const item = inputValue.value;
  const t = document.createTextNode(item);
  const li = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("class", "check");

  li.appendChild(t);
  label.appendChild(t);

  if (item === "") {
    return;
  } else {
    list.appendChild(li);
    li.appendChild(checkbox);
    checkbox.appendChild(label);
    li.appendChild(label);
  }
  inputValue.value = "";
}
