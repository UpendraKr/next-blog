import Link from 'next/link'
import React from 'react'
import styles from '../styles/Blog.module.css'


// step1: get all blogs form files
// step2: iterate through on display
const blog = () => {
  return (
    <main className={styles.main}>
      <div className="blogs">
      <h2>Popular blogs:</h2>
        <div className="blogitem">
          <Link href='/blogpost/learn-javascript'>
          <h3 className={styles.blogItemh3}>HOw to learn javascript in 2020</h3>
          </Link>

          <p>javascript is a very popular lanuage. It is simple to use.</p>
          <h3>HOw to learn javascript in 2020</h3>
          <p>javascript is a very popular lanuage. It is simple to use.</p>
          <h3>HOw to learn javascript in 2020</h3>
          <p>javascript is a very popular lanuage. It is simple to use.</p>
        </div>

      </div>
    </main>

  )
}

export default blog