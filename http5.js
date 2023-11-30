
const http = require('http')

const data = "I have completed c,c++,Dsa,javascript,MongoDB,Mysql"

const server = http.createServer((req,res)=>{

    res.end(data)

})

server.listen(5050,(err)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log("Server Started...")
    }
})