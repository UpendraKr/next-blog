import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';

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
              <p>{blogItem.metadesc?.substr(0, 140)}...</p>
            </div>
          )
        })}

      </div>

    </main>

  )
}

export async function getStaticProps() {
  let data = await fs.promises.readdir("blogdata")

  let allBlogs = [];
  for (let index=0; index < data.length; index++){
    const item = data[index]
    let myFile = await fs.promises.readFile("blogdata/" + item, 'utf-8')
    // console.log(myFile)
    allBlogs.push(JSON.parse(myFile))
  }


  return { props: { allBlogs } }
}

// For server-side rendering:
// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/blogs`)
//   const allBlogs = await res.json()

//   return { props: { allBlogs } }
// }

export default blog