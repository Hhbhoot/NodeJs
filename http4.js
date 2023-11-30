
const http = require('http')

const data = "Currently i am studying Node js"

const server = http.createServer((req,res)=>{

    res.end(data)

})

server.listen(4040,(err)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log("Server Started...")
    }
})