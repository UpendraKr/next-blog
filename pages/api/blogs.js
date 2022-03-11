// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  const count = req.query.count;
  let data = await fs.promises.readdir("blogdata")
  data = data.slice(0, count)
  let allBlogs = [];
  for (let index=0; index < data.length; index++){
    const item = data[index]
    let myFile = await fs.promises.readFile("blogdata/" + item, 'utf-8')
    // console.log(myFile)
    allBlogs.push(JSON.parse(myFile))
  }

  res.status(200).json(allBlogs)
  // fs.readdir("blogdata", 'utf-8', (err, data)=>{        // read directory
  //   console.log(data)
  //   res.status(200).json(data)
  // })
}
