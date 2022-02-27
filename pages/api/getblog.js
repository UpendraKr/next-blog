import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data)=>{
    console.log(data)
    if(err){
        res.status(400).json({"message":"Error to get data"})
    }
    res.status(200).json(JSON.parse(data))
  })
}
