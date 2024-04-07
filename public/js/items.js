// Awesomplete list of items for autofill 
import itemValues from "./values/itemValues.js";
const input = document.getElementById("get-items");
new Awesomplete(input, {
    list: itemValues
});

// JS for contacting server and adding item to suitcase 
const addItem = async (event) => {
    event.preventDefault();

    const itemSelected = document.querySelector('#get-items').value.trim();
    const response = await fetch(`/api/item/id?item=${itemSelected}`);

    if (response.ok) {
        const item_id = await response.json();
        const location_id = 1;
        if (item_id && location_id) {
            const response = await fetch('/api/addItem', {
                method: 'POST',
                body: JSON.stringify({ item_id, location_id }),
                headers: { 'Content-Type': 'application/json', },
            });
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Item already in suitcase!')
            }
        }
    }
};


// JS for contacting server and deleting item from suitcase
const deleteItem = async (event) => {
    if (event.target.getAttribute('data-item')) {
        const item_id = event.target.getAttribute('data-item');

        const response = await fetch('/api/deleteItem', {
            method: 'DELETE',
            body: JSON.stringify({ item_id }),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Item already deleted!');
        }
    };
};


document.querySelector('.add-item-form').addEventListener('submit', addItem);

const deleteButtons = document.querySelectorAll('.delete-item-button')
deleteButtons.forEach(function (deletebutton) {
    deletebutton.addEventListener('click', deleteItem)
});