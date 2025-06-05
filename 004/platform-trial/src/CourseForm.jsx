import React, { useState, useEffect } from 'react';

const CourseForm = ({ onAdd, onUpdate, editingCourse }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editingCourse) {
      setTitle(editingCourse.title);
      setDesc(editingCourse.desc);
    }
  }, [editingCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;

    const course = { title, desc };

    if (editingCourse) {
      onUpdate({ ...editingCourse, ...course });
    } else {
      onAdd(course);
    }

    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingCourse ? 'Edit Course' : 'Add New Course'}</h2>
      <input
        type="text"
        placeholder="Course title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      /><br />
      <button type="submit">
        {editingCourse ? 'Update Course' : 'Add Course'}
      </button>
    </form>
  );
};

export default CourseForm;
