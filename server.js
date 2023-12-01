
const http = require('http')
const fs = require('fs')

const data = fs.readFileSync('Demo.txt','utf-8')
const product = fs.readFileSync('product.json','utf-8')
const friend = {

            'Name': "Hitesh",
            'city' : "Bhavnagar",
            'state' : "Gujarat",
            'Country' : "Bharat"
}


const server = http.createServer();

server.on('request', (req, res) => {

    // let item = res.url.split('/')

    // console.log(req.url)
    // res.end("Hello World")


    switch(req.url){

        case '/' :
            res.setHeader('content-type','text/html');
            res.end(data)
            break;

        case '/product':
            res.setHeader('content-type','application/json')     
            res.end((product))
            break;

        case '/friend':
            res.setHeader('content-type','application/json')    
            res.end(JSON.stringify(friend))
            break;

         default :
         
         res.end("page not found")
         break;
    }

})


server.listen(7070, (err) => {

    if (err) {
        console.log(err)
    }
    else {

        console.log("server Started")
    }
})