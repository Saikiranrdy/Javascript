let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainerE1 = document.getElementById("groceryListContainer");

groceryListContainerE1.classList.add("grocery-list-container");

let headingE1 = document.createElement("h1");
headingE1.classList.add("grocery-list-heading");
headingE1.textContent = "Grocery List";
groceryListContainerE1.appendChild(headingE1);

let listItemsContainerE1 = document.createElement("ul");
listItemsContainerE1.classList.add("list-items-container");
groceryListContainerE1.appendChild(listItemsContainerE1);

for (let groceryItem of groceryList) {
    let listItemE1 = document.createElement("li");
    listItemE1.textContent = groceryItem;
    listItemsContainerE1.appendChild(listItemE1);
}