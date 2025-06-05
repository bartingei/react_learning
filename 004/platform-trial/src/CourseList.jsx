import React from 'react';

const CourseList = ({ courses, onEdit, onDelete }) => {
  if (courses.length === 0) return <p>No courses yet.</p>;

  return (
    <div>
      <h2>All Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} style={{ marginBottom: '10px' }}>
            <strong>{course.title}</strong><br />
            {course.desc}<br />
            <button onClick={() => onEdit(course)}>Edit</button>
            <button onClick={() => onDelete(course.id)} style={{ marginLeft: '5px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
