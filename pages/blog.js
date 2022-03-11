import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs.slice(0, 2));
  const [count, setCount] = useState(2)

  const fetchMoreData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs?count=${count + 2}`)
    let data = await d.json()
    setBlogs(data)
    setCount(count+2)
  };


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

      <InfiniteScroll
        dataLength={blogs.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={props.allBlogsCount !== blogs.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
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
      </InfiniteScroll>



    </main>

  )
}

export async function getStaticProps() {
  let data = await fs.promises.readdir("blogdata")

  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    let myFile = await fs.promises.readFile("blogdata/" + item, 'utf-8')
    // console.log(myFile)
    allBlogs.push(JSON.parse(myFile))
  }


  return { 
    props: { 
      allBlogs: allBlogs, 
      allBlogsCount: allBlogs.length 
    }
   }
}

// For server-side rendering:
// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3000/api/blogs`)
//   const allBlogs = await res.json()

//   return { props: { allBlogs } }
// }

export default blog