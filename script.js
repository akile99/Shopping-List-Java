var userInput = document.getElementById("textbox");
var enterBtn = document.getElementById("enter");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li")

enterBtn.addEventListener("click", addListAfterClick);
userInput.addEventListener("keypress", addListAfterEnter);

getListElements();
getButtonListElement();

function addListAfterClick() {
	//console.log("Good Job you click");
	if (inputLength() > 0) {
		createListItem();
	}
}

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListItem();
	}
	//console.log(event);
}

//Create new list items to shopping list
function createListItem() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(userInput.value));
	ul.appendChild(li);
	li.appendChild(button);
	button.innerHTML = "X";
	userInput.value = "";
// Get new locations for li elements
	getListElements();
	getButtonListElement();
}

function toggleListElement() {
	this.classList.toggle("done");
}

function inputLength() {
	return userInput.value.length;
}

//Get list element location
function getListElements() {
	for (i = 0; i < li.length; i++) {
		li[i].addEventListener('click', toggleListElement)
	}
}

//Get button element id
function getButtonListElement() {
	var delBtn = document.querySelectorAll('li button');
	for (i = 0; i < delBtn.length; i++) {
		delBtn[i].addEventListener('click', clearListItem)
	}
}

function clearListItem() {
	for (i = 0; i < li.length; i++) {
		this.parentNode.remove()
	}
}


