import React, {useState} from 'react';

//updating state of an object

function ObjectSet(){
    const [car, setCar] = useState({
        year: 2025,
        make: "Ford",
        model: "Mustang"
    })

    function handleChangeYear(event){
        //spread operator ... is used to help maintain
        //  the objects that were initially in the object or in an array
        // we are now using updater function
        setCar(c => ({...c, year:event.target.value}))
    }
    function handleChangeMake(event){
        setCar(c => ({...c,make:event.target.value }))

    }
    function handleChangeModel(event){
        setCar(c => ({...c, model:event.target.value}))
    }

    return(
        <div>
            <p>Your favourite car is: {car.year}, {car.make}, {car.model} </p>
            <input type="number" value={car.year} onChange={handleChangeYear} />
            <input type="text" value={car.make} onChange={handleChangeMake}/>
            <input type="text" value={car.model} onChange={handleChangeModel}/>
        </div>
    );
}

export default ObjectSet