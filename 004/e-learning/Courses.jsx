import React, {useState} from 'react';

function Courses(){
    // i want to save the courses in an array and later display them
    const [courses, setCourses] = useState([]);
    
    // a variable to store the course name
    const [courseName, setName] = useState('');

    // a variable to store the course name
    const [courseDesc, setCourseDesc] = useState('')





    function handleRegister(){

        const newCourse = {
            name: courseName,
            description: courseDesc,
        };

        //this is an updater function
        setCourses(c => [...c, newCourse])

        //clearing input fields
        
        setName('');
        setCourseDesc('');

    }
    function handleDeleteCourse(){

    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleDescriptionChange(event){
        setCourseDesc(event.target.value);
    }



    return(
    <>
        <div className="nav-container">
            <h3>e-learning</h3>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Assignments</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </nav>
        </div>
        <div className="intro-text">
            <h2>Welcome to our courses page</h2>
            <p>Register your course here</p>
        </div>
        <div className="form-container">
            <form action="#">
                <label htmlFor="courseName"> Course Name:  
                    <input type="text"
                     id="courseName" 
                     value={courseName}
                     onChange={handleNameChange}
                     placeholder='Enter course name'
                     /> 
                </label>

                <label htmlFor="courseDesc"> C.Description:
                    <input type="text"
                     id="courseDesc"
                     value = {courseDesc}
                     onChange={handleDescriptionChange}
                     placeholder='(Enter course description in brackets)'
                     />
                </label>
                <br></br><br></br>
                <button type="button" onClick={handleRegister} disabled = {courseName.trim() === '' || courseDesc.trim() === '' } >Register</button>
            </form>
        </div>

        
        <div className="reg-container">
            <div className="registered-text">
            <h2>Registered courses appear below</h2>
        </div>
            <div className="registered-courses">
            <ol>
                {courses.map((course,index) => 
                    <li key={index}>
                    <strong style={{fontSize: "25px"}}>{course.name}</strong> {course.description}
                </li>)}
            </ol>
        </div>
        </div>
    </>
    );
}

export default Courses