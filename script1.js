document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    
    const confirmationMessage = `Thank you, ${name}! Your booking from ${from} to ${to} on ${date} for ${seats} seat(s) has been confirmed.`;
    document.getElementById('confirmationMessage').innerText = confirmationMessage;

    
    document.getElementById('confirmation').classList.remove('hidden');

    
    this.reset();
});