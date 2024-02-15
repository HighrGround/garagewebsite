document.addEventListener('DOMContentLoaded', function () {
    const carList = document.getElementById('car_list');

    // Fetch and display existing cars from the database
    fetch('/api/cars')
        .then(response => response.json())
        .then(cars => {
            cars.forEach(car => {
                // Create a list item for each car and append it to the car list
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${car.make} ${car.model} (${car.year})</h3>
                    <p>Mileage: ${car.mileage}</p>
                    <p>Price: ${car.price}</p>
                    <p>Fuel Type: ${car.fuel_type}</p>
                    <p>Transmission: ${car.transmission}</p>
                    <p>Color: ${car.color}</p>
                    <p>Description: ${car.description}</p>
                `;
                carList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});