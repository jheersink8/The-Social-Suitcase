// JS for contacting sever and adding item from social suitcase
const addSocialItem = async (event) => {
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

const addButtons = document.querySelectorAll('.add-social-item')
addButtons.forEach(function (addButton) {
    addButton.addEventListener('click', addSocialItem)
})