import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
  const blogItem = props.blogItem

  function createMarkup(content) {
    return {__html: content};
  }

  // const [blogItem, setBlogItem] = useState({})

  // const router = useRouter()
  // // console.log(router.query)
  // const { slug } = router.query
  

  // useEffect(() => {
  //   if (! router.isReady) return;
  //   console.log("use effect is running.")
  //   let url = `http://localhost:3000/api/getblog?slug=${slug}`
  //   fetch(url).then((res) => {
  //     return res.json();
  //   })
  //     .then((parsed) => {
  //       // console.log(parsed)
  //       setBlogItem(parsed)
  //     })
  // }, [router.isPreview])

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Title for the page {blogItem?.title}</h1>
        <hr></hr>
        { blogItem && <div dangerouslySetInnerHTML={createMarkup(blogItem?.content)}></div>}
      </div>

    </div>

  )
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-flask' } },
      { params: { slug: 'how-to-learn-javascript' } },
      { params: { slug: 'how-to-learn-nextjs' } }
    ],
    fallback: true 
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params

  let blogItem = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  return { props: { blogItem: JSON.parse(blogItem) } }
}

// export async function getServerSideProps(context) {
//   const { slug } = context.query
//   let url = `http://localhost:3000/api/getblog?slug=${slug}`
//   const res = await fetch(url)
//   const blogItem = await res.json()

//   return { props: { blogItem } }
// }

export default Slug;