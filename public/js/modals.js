const modal = document.getElementById('html-modal')

// Constructor function to create modals to avoid DRY
function Modal(modalID, header, message) {
    this.modalID = modalID;
    this.header = header;
    this.message = message;
    this.showModal = function () {
        const modal = new bootstrap.Modal(document.getElementById(`${this.modalID}`));
        modal.show();
    }
    this.createModal = function () {
        modal.innerHTML = `
        <div class="modal" id="${modalID}" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header text-light">
        <h5 class="modal-title">${header}</h5>
        <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <p class="text-light">${message}</p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
        </div>
        </div>
        </div>
        `
    }
}

// Modal List:
//Item not in list
const badItem = new Modal ('badItemModal', 'Please Advise!', 'This item is not available to add. Please only select items from the auto-complete list.')

// Item already in suitcase
const existingItem = new Modal ('existingItemModal', 'Please Advise!', 'This item is already in your suitcase!');

// Successfully added item
const addItem = new Modal('addItemModal', 'Success!', 'Successfully added itme to your suitcase');

// Location not available to add
const badLocation = new Modal ('badLocationModal', 'Please Advise!', 'This location is not available to add. Please only select items from the auto-complete list.');

// Location already in suitcase profile
const existingLocation = new Modal ('existingLocationModal', 'Please Advise', 'This location is already in your suitcase profile!')

//Username and password do not match 
const badPW = new Modal('badPWModal', 'Please Advise!', 'Username and Password combination incorrect!');

//Account already exists 
const badAccount = new Modal ('badAccountModal', 'Please Advise!', 'An account with that email address already exists!')