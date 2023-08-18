// Element selections
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");

function addItem(e) {
	// Prevents default behaviour of form submit event
	e.preventDefault();

	// New item value from the input field
	const newItem = itemInput.value;

	// Validate Input
	if (newItem === "") {
		alert("Please add an item");
		return;
	}
	// console.log('success');

	// Create new list item
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(newItem));
	// console.log(li);

	// Create new button
	const button = createButton("remove-item btn-link text-red");
	// console.log(button);
	// Add new button to list
	li.appendChild(button);

	// Add the new list item to the overall itemList
	itemList.appendChild(li);

	// Reset input value
	itemInput.value = "";
}

function createButton(classes) {
	// Create new btn element
	const button = document.createElement("button");
	button.className = classes;
	// Add create icon element
	const icon = createIcon("fa-solid fa-xmark");
	// To append it inside the button
	button.appendChild(icon);
	return button;
}

function createIcon(classes) {
	// Create new icon element
	const icon = document.createElement("i");
	icon.className = classes;
	return icon;
}

function removeItem(e) {
	// console.log(e.target);
	if (e.target.parentElement.classList.contains("remove-item")) {
		e.target.parentElement.parentElement.remove();
	}
}

function clearItems() {
    // console.log('works');
    // itemList.innerHTML = '';
    // While the item list has a first child
    while (itemList.firstChild) {
        // remove the first child from the itemlist 
        itemList.removeChild(itemList.firstChild)
    }
}

// Event listeners
itemForm.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

clearBtn.addEventListener("click", clearItems);
