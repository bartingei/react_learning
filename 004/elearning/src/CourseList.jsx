import React, { useState } from 'react';
import styles from './CourseList.module.css'

function CourseList() {
  const [courseName, setCourseName] = useState('');
  const [courseDesc, setCourseDesc] = useState('');
  const [courses, setCourses] = useState([]);

  const handleRegister = () => {

    const newCourse = {
      id: Date.now(), 
      name: courseName,
      desc: courseDesc,
    };


    setCourses([...courses, newCourse]);

    //to clear the input fields
    setCourseName('');
    setCourseDesc('');
  };

  return (
    <>
      <nav className="nav-items">
        <h2 className="nav-header">Elearning</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </nav>

      <h2 className="intro-head"><b><u>Welcome to our courses</u></b></h2>
      <p className="intro-text"><b>Register</b> your courses.</p>

      <div className="form-cont">
        <form onSubmit={(e) => e.preventDefault()}>
          <p>
            <label>
              Course Name:
              <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </label>
          </p>
          <br />
          <p>
            <label>
              C.Description:
              <input
                type="text"
                value={courseDesc}
                onChange={(e) => setCourseDesc(e.target.value)}
              />
            </label>
          </p>
          <br />
          <p>
            <button
              type="button"
              className="registerButton"
              onClick={handleRegister}
            >
              Register
            </button>
          </p>
        </form>
      </div>

      <div className="registered-courses">
        <h3 className="reg-header">Registered Courses:</h3>
        {courses.length === 0 ? (
          <p>No courses registered yet.</p>
        ) : (
          <ul>
            {courses.map((course) => (
              <li key={course.id}>
                <strong>{course.name}</strong>: {course.desc}
              </li>
            ))}
          </ul>
        )}
        
      </div>

    </>
  );
}

export default CourseList;
