import React, {useState} from 'react'

function CourseRegister(){

    const [units, setUnits] = useState([
        "Introduction to Programming",
        "Web Development Fundamentals",
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Software Engineering Principles",
        "Machine Learning Basics"
    ])

    const [newUnit, setNewUnit] = useState('')

    
        
    function handleChangeUnit(event){
        setNewUnit(event.target.value)        
    }

    function handleAlert(){
        alert('to be implemented with database');
    }

    function addUnit(){
        if(newUnit.trim() !== ''){
            setUnits(u => [...u,newUnit]);
            //to clear input field
            setNewUnit('')
        }
    }


    function deleteUnit(index){
        // element parameter is not used best practice is to place an underscore to show that it is ignored
        const updatedUnits = units.filter((element,i) => i !== index);
        setUnits(updatedUnits);
    }
    
        


    return(
        <>
            <div className='units-container'>
                <h2>Register units</h2>

                <div className="inputs">
                    <input
                        className='user-input'
                        placeholder='Enter unit name'
                        onChange={(event) => {handleChangeUnit(event)}}
                        value={newUnit}
                        type="text" />
                        <button 
                            className='addButton'
                            onClick={addUnit}
                            type="button">Add</button>
                </div>

            <div>
                <ul>
                    {units.map((unit,index) => <li key={index}>
                        <span className='text'>{unit}</span>
                        <button 
                        className='deleteButton'
                        onClick={() => {deleteUnit(index)}}
                        type="button">
                            delete</button>
                    </li>)}
                </ul>

            </div>
            <div className='submit'>
                <button 
                className='submitButton'
                onClick={handleAlert}
                type="button">Submit</button>
            </div>
            </div>
        </>
    );
}

export default CourseRegister