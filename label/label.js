let checkboxWithLabelContainerE1 = document.getElementById("checkboxWithLabelContainer");

checkboxWithLabelContainerE1.classList.add("text-center", "p-5");

let checkBoxE1 = document.createElement("input");
checkBoxE1.type = "checkbox";
checkBoxE1.id = "checkbox";
checkboxWithLabelContainerE1.appendChild(checkBoxE1);

let labelE1 = document.createElement("label");
labelE1.setAttribute("for", "checkbox");
labelE1.textContent = "Click Me!";
labelE1.classList.add("ml-2");
labelE1.id = "checkboxLabel";
checkboxWithLabelContainerE1.appendChild(labelE1);