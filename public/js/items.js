// Awesomplete list of items for autofill 
import itemValues from "./values/itemValues.js";
const input = document.getElementById("get-items");
new Awesomplete(input, {
    list: itemValues
});

// JS for contacting server and adding item to suitcase 
const addItem = async (event) => {
    event.preventDefault();

    const item_id = 117;
    const location_id = 1;
    if (item_id) {
        const response = await fetch('/api/addItem', {
            method: 'POST',
            // What goes here?
            body: JSON.stringify({ item_id, location_id, user_id }),
            headers: { 'Content-Type': 'application/json', },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add item!')
        }
    }
};


// Route: /addLItem
// "item_id": 6,
// "location_id": 1

// Route: /addUItem
// "item_id": 6,
// "user_id": logged_in user







const deleteItem = () => {

};

document.querySelector('.add-item-form').addEventListener('submit', addItem)
document.querySelector("#delete-item-button").addEventListener('click', deleteItem);