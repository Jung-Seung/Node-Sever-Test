//nodejs기반 express프레임워크 사용
const express = require('express')
//express모듈 가져온다
const app = express()
//express서버 생성해서 app에 할당
const PORT = process.env.PORT || 4000;
//프로세스 내부 환경 포트 or 4000번
//사실 포트에 4000번 할당
//포트 : 프로그램 번호

//get방식 /루트 요청 받아들이는 곳
app.get('/',(req,res)=>{ //화살표 함수 모양의 콜백함수
    console.log('root response')
})
app.get('/hello',(req,res)=>{
    console.log('hello response')
})
app.get('/bye',(req,res)=>{
    res.send('bye response')
    //respose - 응답
    //서버가 요청보낸 클라이언트한테 응답한다
})
app.get('/person1',(req,res)=>{
    console.log('/person1')
})
app.get('/person2/:name',(req,res)=>{
    const name=req.params.name
    //request parameters에 name값 뽑아낸다
    console.log('/person2 요청:'+name)
})
app.get('/person3/:name&:age',(req,res)=>{
    const name=req.params.name
    const age=req.params.age
    //console.log('/person3 요청:'+name+'&'+age)
    console.log(`person3요청: name:${name} and age:${age}`)
})
app.get('/person4/:name&:age&:height',(req,res)=>{
    const name=req.params.name
    const age=req.params.age
    const height=req.params.height
    console.log(req.params) //{ name:'kim', age:'20', height:'176.6' }
    console.log(`person4요청: name:${name} and age:${age} and height:${height}`)
})

// /search.naver.com/search.naver?where=nexearch&ie=utf-8&query=hello
app.get('/search.naver.com/search.naver',(req,res)=>{
    console.log(req.query) //{ where: 'nexearch', ie: 'utf-8', query: 'hello' }
    //저 주소 붙은 쿼리스트링을 출력해라
    console.log(req.query.where) //nexearch
    console.log(req.query.ie) //utf-8
    console.log(req.query.query) //hello
})
// http://localhost:4000/test?query=스파이더맨&country=JP
// 서버에 /test 요청 전송 + 쿼리스트링
// /test - 뭐달라, ?쿼리스트링 - 어떻게달라
app.get('/test',(req,res)=>{
    console.log(req.query) //{ query: '스파이더맨', country: 'JP' }
})

app.listen(PORT,()=>{ //arrow function
    console.log(`Server On : http://localhost:${PORT}`)
})