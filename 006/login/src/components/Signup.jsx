import React, { useState } from 'react';
import styles from './Signup.module.css'; // 👈 import CSS module

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);

    // Clear form
    setEmail('');
    setUsername('');
    setPassword('');
  };

  return (
    <div className={styles.signupContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className={styles.signupButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
