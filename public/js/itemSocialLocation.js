// JS for contacting sever and adding item from social location suitcase to personal suitcase
const addPersonalItem = async (event) => {
    if (event.target.getAttribute('data-item')) {
        const item_id = event.target.getAttribute('data-item');
        const location_id = 1;
        const response = await fetch('/api/addItem', {
            method: 'POST',
            body: JSON.stringify({ item_id, location_id }),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.ok) {
            addItem.createModal();
            addItem.showModal();
        } else {
            existingItem.createModal();
            existingItem.showModal();
        }
    }
};

// JS for contacting sever and adding item from social location suitcase to location specific suitcase
const addLocationItem = async (event) => {
    if (event.target.getAttribute('data-item')) {
        const item_id = event.target.getAttribute('data-item');
        const location_id = event.target.getAttribute('data-location');
        const response = await fetch('/api/addItem', {
            method: 'POST',
            body: JSON.stringify({ item_id, location_id }),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.ok) {
            addItem.createModal();
            addItem.showModal();
        } else {
            existingItem.createModal();
            existingItem.showModal();
        }
    }
};



const addPersonalButtons = document.querySelectorAll('.add-personalLocation-item')
addPersonalButtons.forEach(function (addPersonalButton) {
    addPersonalButton.addEventListener('click', addPersonalItem)
})

const addLocationButtons = document.querySelectorAll('.add-socialLocation-item')
addLocationButtons.forEach(function (addLocationButton) {
    addLocationButton.addEventListener('click', addLocationItem)
})