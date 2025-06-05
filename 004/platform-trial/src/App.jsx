import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CourseForm from './CourseForm';
import CourseList from './CourseList';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const fetchCourses = async () => {
    const res = await axios.get('/api/courses/');
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const addCourse = async (course) => {
    const res = await axios.post('/api/courses/', course);
    setCourses([...courses, res.data]);
  };

  const updateCourse = async (course) => {
    const res = await axios.put(`/api/courses/${course.id}/`, course);
    setCourses(courses.map((c) => (c.id === course.id ? res.data : c)));
    setEditingCourse(null);
  };

  const deleteCourse = async (id) => {
    await axios.delete(`/api/courses/${id}/`);
    setCourses(courses.filter((c) => c.id !== id));
  };

  const startEdit = (course) => {
    setEditingCourse(course);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-learning Course Manager</h1>
      <CourseForm
        onAdd={addCourse}
        onUpdate={updateCourse}
        editingCourse={editingCourse}
      />
      <CourseList
        courses={courses}
        onEdit={startEdit}
        onDelete={deleteCourse}
      />
    </div>
  );
};

export default App;
