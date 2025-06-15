import styles from './Logout.module.css';

function Logout() {
  return (
    <div className={styles.logoutPage}>
      <h2 style = {{marginBottom: "50px", textTransform: "uppercase"}}>Leaving so soon! 😣</h2>
      
      <p><a href="/login">Login</a> again</p>
    </div>
  );
}

export default Logout;
