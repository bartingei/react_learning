import React, { useState } from 'react';

function UpdateArray() {
  const [foods, setFood] = useState(["Apple", "Banana", "Orange"]);

  function addFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    if (newFood.trim() !== "") {
      setFood(f => [...f, newFood]);
    }
  }

  function removeFood(index) {
    setFood(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => removeFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input type="text" placeholder="Enter food name" id="foodInput" />
      <button type="button" onClick={addFood}>Add Food</button>
    </div>
  );
}

export default UpdateArray;
