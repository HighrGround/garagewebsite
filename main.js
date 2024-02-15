document.addEventListener('DOMContentLoaded', function () {
    const carList = document.getElementById('car_list');

    // Fetch and display existing cars from the database
    fetch('node.js')
        .then(response => response.json())
        .then(cars => {
            cars.forEach(car => {
                // Create a list item for each car and append it to the car list
                const li = document.createElement('li');
                li.innerHTML = `
                    <div class="vehicle">
                        <img src="${car.image}" alt="${car.make} ${car.model}">
                        <h2>${car.make} ${car.model} (${car.year})</h2>
                        <p>Mileage: ${car.mileage}</p>
                        <p>Price: £${car.price}</p>
                        <p>Year: ${car.year}</p>
                    </div>
                `;
                carList.appendChild(li);
            });
        });

    // Handle form submission (assuming the form is for adding new cars)
    const carForm = document.getElementById('carForm');
    carForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(carForm);
        const carModel = formData.get('model');
        // Assuming other form fields are present and named accordingly

        // Send new car data to the server
        fetch('/api/cars', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: carModel,
                // Add other properties as needed based on form input
            }),
        })
        .then(response => response.json())
        .then(newCar => {
            // Update the UI with the new car
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="vehicle">
                    <img src="${newCar.image}" alt="${newCar.make} ${newCar.model}">
                    <h2>${newCar.make} ${newCar.model} (${newCar.year})</h2>
                    <p>Mileage: ${newCar.mileage}</p>
                    <p>Price: £${newCar.price}</p>
                    <p>Year: ${newCar.year}</p>
                </div>
            `;
            carList.appendChild(li);

            // Clear the form
            carForm.reset();
        });
    });
});
