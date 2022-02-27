import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// 1.Find the file as per slug.
// 2. display file data
const slug = () => {
  const router = useRouter()
  console.log(router.query)
  const { slug } = router.query
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Title for the page {slug}</h1>
        <hr></hr>
        <div>
          JavaScript is the world's most popular programming language.

          JavaScript is the programming language of the Web.

          JavaScript is easy to learn.

          This tutorial will teach you JavaScript from basic to advanced.
        </div>
      </div>

    </div>

  )
};

export default slug;