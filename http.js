
const http = require('http')

const fs = require('fs')

const Data = fs.readFileSync('index.html','utf-8')

// const Buffer_data = fs.readFileSync('Demo.txt')
// const Data=  Buffer_data.toString();

// const Data = fs.readFileSync('Demo.txt', 'utf-8')


// const data = "Hello World Welcome to my server"

const server = http.createServer((req, res) => {

    // res.setHeader("Dummy", 'Data')
    res.setHeader('content-type', 'text/html')
    // res.write("Hello World ")

    res.end(Data)

})

server.listen(1010, (err) => {

    if (err) {
        console.log(err)
    }
    else {
        console.log("Server Started...")
    }
})