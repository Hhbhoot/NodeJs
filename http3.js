
const http = require('http')

const data = "I Study At Skill Qode"

const server = http.createServer((req,res)=>{

    res.end(data)

})

server.listen(3030,(err)=>{

    if(err){
        console.log(err)
    }
    else{
        console.log("Server Started...")
    }
})