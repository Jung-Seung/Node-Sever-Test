const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

var bookList=[
    {id:1,title:'어쩌다 한국인',writer:'허태균'},
    {id:2,title:'사피엔스',writer:'유발 하라리'},
    {id:3,title:'개미',writer:'베르나르 베르베르'}
]
app.get('/book',(req,res)=>{
    res.send(bookList)
    //response send
})
app.get('/book/:id',(req,res)=>{
    console.log(req.params)
    //request parameters
    console.log(req.params.id)
    const id = parseInt(req.params.id)
    var bookObj=null
    var find=false //찾았는지 여부
    for(var i=0; i<bookList.length; i++){
        if(bookList[i].id === id){
            bookObj=bookList[i]
            find=true
            break
        }
    }
    if(find === true){
        res.send(bookObj)
    }else if(find === false){
        res.send("DATA NOT FOUND")
    }
    
})
app.post('/book',(req,res)=>{
    console.log('/book(POST)')
    console.log(req.body)
    const bookObj = req.body
    bookList.push(bookObj)
    res.send(bookList)
})
app.put('/book/:id',(req,res)=>{
    console.log('/book(PUT)')
    console.log(req.params)
    console.log(req.params.id)
    console.log(req.body)
    const id = parseInt(req.params.id)
    const title = req.body.title
    var bookObj=null
    for(var i=0; i<bookList.length; i++){
        if(bookList[i].id === id){
            bookList[i].title = title
            bookObj=bookList[i]
        }
    }
    res.send(bookObj)
})
app.delete('/book/:id',(req,res)=>{
    console.log('/book(DELETE)')
    console.log(req.params)
    console.log(req.params.id)
    console.log(req.body)
    const id = req.body.id
    var index=0
    for(var i=0; i<bookList.length; i++){
        if(bookList[i].id === id){
            index=i
        }
    }
    const bookObj=bookList.splice(index,1)
    console.log(bookObj)
    res.send(bookList)
})

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})