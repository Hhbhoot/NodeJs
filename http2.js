
const http = require('http')

const data = {

    "Name": "Hitesh",
    "Age": 23,
    "Courese": "Nodejs"
}

const server = http.createServer((req, res) => {

    res.setHeader('content-type', 'json/apllication')

    // res.write("Hello")

    res.end(JSON.stringify(data))

})

server.listen(6060, (err) => {

    if (err) {
        console.log(err)
    }
    else {
        console.log("Server Started...")
    }
})