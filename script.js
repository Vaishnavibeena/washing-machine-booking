let bookings = [];

// Book a slot
function bookSlot() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const name = document.getElementById('name').value;

    if (!date || !time || !name) {
        alert('Please select a date, time and enter your name.');
        return;
    }

    const today = new Date();
    const selectedDate = new Date(date);

    // Prevent booking in the past
    if (selectedDate < today) {
        alert('You cannot book a slot in the past!');
        return;
    }

    const bookingString = `${date} - ${time} (Booked by: ${name})`;

    // Check if the slot is already booked
    if (bookings.includes(bookingString)) {
        alert('This slot is already booked.');
        return;
    }

    bookings.push(bookingString);
    updateBookingList();
    alert('Slot booked successfully!');
}

// Update the booking list
function updateBookingList() {
    const bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = '';
    bookings.forEach(slot => {
        const li = document.createElement('li');
        li.textContent = slot;

        // Create a cancel button for each booking
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.classList.add('cancel');
        cancelButton.onclick = function () { cancelBooking(slot); };

        li.appendChild(cancelButton);
        bookingList.appendChild(li);
    });
}

// Cancel a booking
function cancelBooking(slot) {
    const index = bookings.indexOf(slot);
    if (index > -1) {
        bookings.splice(index, 1);
        updateBookingList();
        alert('Booking canceled successfully!');
    }
}
