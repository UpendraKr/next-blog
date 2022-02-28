import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

// 1.Find the file as per slug.
// 2. display file data
const slug = () => {
  const [blogItem, setBlogItem] = useState({})

  const router = useRouter()
  // console.log(router.query)
  const { slug } = router.query

  useEffect(() => {
    if (! router.isReady) return;
    console.log("use effect is running.")
    let url = `http://localhost:3000/api/getblog?slug=${slug}`
    fetch(url).then((res) => {
      return res.json();
    })
      .then((parsed) => {
        // console.log(parsed)
        setBlogItem(parsed)
      })
  }, [router.isPreview])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Title for the page {blogItem.title}</h1>
        <hr></hr>
        <div>
        {blogItem.content}
        </div>
      </div>

    </div>

  )
};

export default slug;