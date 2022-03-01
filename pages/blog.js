import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'

const blog = (props) => {
  const blogs = props.allBlogs

    // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   console.log("use effect is running.")
  //   let url = "http://localhost:3000/api/blogs"
  //   fetch(url).then((res) => {
  //     return res.json();
  //   })
  //     .then((parsed) => {
  //       // console.log(parsed)
  //       setBlogs(parsed)
  //     })
  // }, [])


  return (
    <main className={styles.main}>
      <h2>Popular blogs:</h2>

      <div className="blogitem3">
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug} >

              <Link href={`/blogpost/${blogItem.slug}`}>
              <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
              </Link>
              <p>{blogItem.content.substr(0, 140)}...........</p>
            </div>
          )
        })}

      </div>

    </main>

  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/blogs`)
  const allBlogs = await res.json()

  return { props: { allBlogs } }
}

export default blog