const http = require('http')
const fs = require('fs')
const PORT = 8000

const server = http.createServer((req,res)=>{
    
            let dateTime = new Date()
            fs.writeFileSync(`DateTime/${dateTime}`, dateTime.toString())
        
            let data = fs.readFileSync(`DateTime/${dateTime}`)
        
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
       
})

server.listen(PORT)