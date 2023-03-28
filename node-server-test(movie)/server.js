const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

var movieList=[
    { id:1,title:'해리포터',rating:9.4 },
    { id:2,title:'아바타',rating:9.6 },
    { id:3,title:'탑건',rating:9.3 }
]

app.get('/movies',(req,res)=>{
    //console.log("/movies")
    //res.send('/movies')
    res.send(movieList)
    //response - 응답
    //res.send 요청한 클라이언트에 응답한다
})
app.get('/movies/:id',(req,res)=>{
    console.log("/movies/:id")
    console.log(req.params)
    console.log(req.params.id)
    const id = parseInt(req.params.id)
    var movieObj=''
    for(var i=0; i<movieList.length; i++){
        if(movieList[i].id === id){
            console.log('FIND')
            movieObj=movieList[i]
            break
        }
    }
    res.send(movieObj)
})
app.post('/movies',(req,res)=>{
    console.log("/movies(POST)")
    console.log(req.body)
    const movieObj = req.body
    movieList.push(movieObj) //movieList에 원소 추가
    res.send(movieList)
})
app.put('/movies',(req,res)=>{
    console.log("/movies(PUT)")
    console.log(req.body) //{ id:2,rating:9.8 }
    const id = req.body.id
    const rating = req.body.rating
    var movieObj=''
    for(var i=0; i<movieList.length; i++){
        if(movieList[i].id === id){
            movieList[i].rating = rating
            movieObj=movieList[i]
        }
    }
    res.send(movieObj)
})
app.delete('/movies',(req,res)=>{
    console.log("/movies(DELETE)")
    console.log(req.body) //{ id:2 }
    //배열 삭제할때(pop, splice, slice, unshift, ...)
    //splice로 삭제, splice는 추가도 되고, 삭제도 된다
    const id = req.body.id
    var index=0
    for(var i=0; i<movieList.length; i++){
        if(movieList[i].id === id){
            index=i
        }
    }
    const movieObj=movieList.splice(index,1)
    //index번째 부터 1개 삭제
    console.log(movieObj)
    res.send(movieList)
})

app.listen(PORT,()=>{
    console.log(`Server On: http://localhost:${PORT}`)
})