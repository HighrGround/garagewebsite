document.addEventListener('DOMContentLoaded', function () {
    const carList = document.getElementById('carList');
    const carForm = document.getElementById('carForm');

    // Fetch and display existing cars
    fetch('/api/cars')
        .then(response => response.json())
        .then(cars => {
            cars.forEach(car => {
                const li = document.createElement('li');
                li.textContent = car.model;
                carList.appendChild(li);
            });
        });

    // Handle form submission
    carForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const carModel = document.getElementById('carModel').value;

        // Send new car data to the server
        fetch('/api/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ model: carModel }),
        })
        .then(response => response.json())
        .then(newCar => {
            // Update the UI with the new car
            const li = document.createElement('li');
            li.textContent = newCar.model;
            carList.appendChild(li);
        });

        // Clear the form
        carForm.reset();
    });
});
