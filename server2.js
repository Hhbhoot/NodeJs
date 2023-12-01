const http = require('http')
const fs = require('fs')
// const port = 8080 ;

const product = fs.readFileSync('product.json','utf-8')
const demo = fs.readFileSync('Demo.txt','utf-8')
const index = fs.readFileSync('index.html','utf-8')

const server = http.createServer();

server.on('request',(req,res)=>{

    //  console.log(req.url)
    //  res.end("Hello")

    let item = req.url.split('/');

     if(item[1] === 'user'){
        res.setHeader('content-type','text/html')
        res.end(index)
     }
     else if(item[1] === 'product'){

        res.setHeader('content-type','application/json')
        res.end('product')
     }

     else if( item[1]=== 'demo'){

        res.setHeader('content-type','text/html')
        res.end(demo)
     }

     else{

        res.end("Page Not found")
     }

    // console.log(item)

})

server.listen(8080,(err)=>{

    if(err){
        console.log(err)
    }
    else{

        console.warn("Server Started...")
    }
})