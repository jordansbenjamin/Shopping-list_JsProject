// Element selections
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById("filter");

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
	// Adding li to the DOM
	itemList.appendChild(li);

	checkUI();

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
		if (confirm('Are you sure?')) {
			e.target.parentElement.parentElement.remove();

			checkUI();
		}
	}
}

function clearItems() {
	// console.log('works');
	// itemList.innerHTML = '';
	// While the item list has a first child
	if (confirm('Are you sure?')) {
		while (itemList.firstChild) {
			// remove the first child from the itemlist
			itemList.removeChild(itemList.firstChild);
		}
		checkUI();
	}
	
}

function checkUI() {
	// Has to be defined in this func because it will check the amount of items whenever its called
	const items = itemList.querySelectorAll("li");
	console.log(items);
	if (items.length === 0) {
		clearBtn.style.display = "none";
		itemFilter.style.display = "none";
	} else {
		clearBtn.style.display = "block";
		itemFilter.style.display = "block";
	}
}

// Event listeners
itemForm.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

clearBtn.addEventListener("click", clearItems);

checkUI();
