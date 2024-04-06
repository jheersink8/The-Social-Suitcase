// Awesomplete list of items for autofill 
import itemValues from "./values/itemValues.js";
const input = document.getElementById("get-items");
new Awesomplete(input, {
    list: itemValues
});

const deleteBtn = document.getElementById("delete-item-button");









const deleteItem = () => {
    
};



deleteBtn.addEventListener("click", deleteItem);