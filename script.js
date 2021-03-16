const form = document.getElementById("form");
const list = document.getElementById("to-do");
const textValue = document.getElementById("value-text");

function addItem() {
	list.innerHTML += `<li class='item'>${textValue.value}</li>`;
	textValue.value = "";
}
