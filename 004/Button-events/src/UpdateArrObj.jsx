import React, { useState } from 'react';

function UpdateArrObj() {
  // State to hold list of cars
  const [cars, setCars] = useState([]);

  // States for input fields
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  // Add a new car to the list
  function handleAddCar() {
    if (carMake.trim() === '' || carModel.trim() === '') {
      alert("Please fill in both Make and Model.");
      return;
    }

    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel
    };

    setCars(prevCars => [...prevCars, newCar]);

    // Clear input fields after adding
    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  }

  // Remove a car by index
  function handleRemoveCar(index) {
    setCars(c => c.filter((_, i) => i !== index));
  }

  // Handle input changes
  function handleChangeYear(event) {
    setCarYear(Number(event.target.value));
  }

  function handleChangeMake(event) {
    setCarMake(event.target.value);
  }

  function handleChangeModel(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
            
          </li>
        ))}
      </ul>

      <h3>Add a New Car</h3>
      <input
        type="number"
        value={carYear}
        onChange={handleChangeYear}
        placeholder="Year"
      /><br /><br />

      <input
        type="text"
        value={carMake}
        onChange={handleChangeMake}
        placeholder="Make"
      /><br /><br />

      <input
        type="text"
        value={carModel}
        onChange={handleChangeModel}
        placeholder="Model"
      /><br /><br />

      <button type="button" onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default UpdateArrObj;
