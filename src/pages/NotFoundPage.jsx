import React from 'react'
import styles from "./NotFoundPage.module.css"
import { Link } from 'react-router-dom'
function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.text}>oops! Page not found</p>
      <p className={styles.subText}>
        the change you are looking for might have been removed, had its name changed, or is temporarily unavailable
      </p>
      <Link to='/' className={styles.link}>
      Go to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage
