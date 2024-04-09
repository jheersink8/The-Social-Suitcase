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
        const location_id = document.querySelector('.location-personal-header').getAttribute('data-location');

        if (item_id) {
            const response = await fetch(`/api/addItem/${location_id}`, {
                method: 'POST',
                body: JSON.stringify({ item_id }),
                headers: { 'Content-Type': 'application/json', },
            });
            if (response.ok) {
                document.location.replace(`/location/${location_id}`);
            } else {
                existingItem.createModal();
                existingItem.showModal();
            }
        }
    } else {
        badItem.createModal();
        badItem.showModal();
    }
};

// JS for contacting server and deleting an item from a specific location 
const deleteItem = async (event) => {
    if (event.target.getAttribute('data-item')) {
        const item_id = event.target.getAttribute('data-item');
        const location_id = document.querySelector('.location-personal-header').getAttribute('data-location');
        const response = await fetch(`/api/deleteItem/${location_id}`, {
            method: 'DELETE',
            body: JSON.stringify({ item_id }),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.ok) {
            document.location.replace(`/location/${location_id}`);
        } else {
            alert('Item already deleted!');
        }
    };
};

const buttons = document.querySelectorAll('.delete-itemLocation-button')
buttons.forEach(function (button) {
    button.addEventListener('click', deleteItem)
});

document.querySelector('.add-itemLocation-form').addEventListener('submit', addItem)


