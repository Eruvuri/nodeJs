const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>
{
  console.log(req.url)  
  res.setHeader("Access-Control-Allow-Origin", "*")
  //res.end("<a href='./index.html>click me </a>")

  if(req.url == '/'){
    //res.end("<h1>Home Page</h1>")
    fs.readFile(path.join(__dirname,'public','index.html'),
    (err,content)=>{
        if(err) throw err;
        res.writeHead(200,{"content-type":"text/html"})
        res.end(content)
    })
}else if(req.url==='/about'){
    fs.readFile(path.join(__dirname,'public','about.html'),
    (err,content)=>{
        if(err) throw err;
        res.writeHead(200,{"content-type":"text/html"})
        res.end(content)
    })
}else if(req.url==='/api'){
  /*  mongodb+srv://eswar:Eeshu3210@cluster0.blbdr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority*/
  console.log()
    fs.readFile(path.join(__dirname,'public','db.json'),
    (err,content)=>{
        if(err) throw err;
        res.writeHead(200,{"content-type":"application/json"})
        res.end(content)
    })


}else if(req.url==='css'){
    fs.readFile(path.join(__dirname,'public','stylegrid.css'),
    (err,content)=>{
        if(err) throw err;
        res.writeHead(200,{"content-type":"application/json"})
        res.end(content)
    })
}
else{
    fs.readFile(path.join(__dirname,'public','404.html'),
    (err,content)=>{
        if(err) throw err;
        res.writeHead(200,{"content-type":"text/html"})
        res.end(content)
    })
}


})

const PORT = process.env.PORT || 5151;
server.listen(PORT,()=>{
    console.log(`Server is working ${PORT}`);
})
