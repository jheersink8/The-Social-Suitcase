// Awesomplete list of locations for autofill 
import locationValues from "./values/locationValues.js";
const input = document.getElementById("get-locations");
new Awesomplete(input, {
    list: locationValues
});

// JS for contacting server and adding location to suitcase profile
const addLocation = async (event) => {
    event.preventDefault();

    const locationSelected = document.querySelector('#get-locations').value.trim();
    const response = await fetch(`/api/location/id?country_state=${locationSelected}`);

    if (response.ok) {
        const location_id = await response.json();
        // const item_id = 1;
        if (location_id) {
            const response = await fetch('/api/addLocation', {
                method: 'POST',
                body: JSON.stringify({ location_id }),
                headers: { 'Content-Type': 'application/json', },
            });
            if (response.ok) {
                document.location.replace('/my-locations');
            } else {
                existingLocation.createModal();
                existingLocation.showModal();
            }
        }
    } else {
        badLocation.createModal();
        badLocation.showModal();
    }
};


// JS for contacting server and deleting location from suitcase
const deleteLocation = async (event) => {
    if (event.target.getAttribute('data-location')) {
        const location_id = event.target.getAttribute('data-location');

        const response = await fetch('/api/deleteLocation', {
            method: 'DELETE',
            body: JSON.stringify({ location_id }),
            headers: { 'Content-Type': 'application/json', },
        });
        if (response.ok) {
            document.location.replace('/my-locations');
        } else {
            alert('Location already deleted!');
        }
    };
};


document.querySelector('.add-location-form').addEventListener('submit', addLocation);

const deleteButtons = document.querySelectorAll('.delete-location-button')
deleteButtons.forEach(function (deletebutton) {
    deletebutton.addEventListener('click', deleteLocation)
});