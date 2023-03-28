//express 가져와서 생성 할당하고 4000번 포트 할당
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000; //wellnone PORT 번호 피해서 아무번호
const bodyParser = require('body-parser')
//body를 파싱해서 제대로 읽어지게 한다
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('root')
})
//http://localhost:4000/car?model=ㅇㅇㅇ&fuel=00.0&price=0,000
app.get('/car',(req,res)=>{
    console.log('car(GET)')
    console.log(req.query)
})

//post방식에서 undefined로 뜨는 값
//req.body로 넘겨받은 JSON 데이터를 읽어들이기 위한 설정
//app.use(express.json())
//app.use(express.urlencoded({extended:false}))
app.post('/car',(req,res)=>{
    console.log('car(POST)')
    console.log(req.body)
    //POST맨의 POST방식 요청에 설정한 raw->body->JSON 의 데이터
    const model = req.body.model
    const fuel = req.body.fuel
    const price = req.body.price
    console.log(model)
    console.log(fuel)
    console.log(price)
})

//수정
app.put('/car',(req,res)=>{
    console.log('car(PUT)')
    console.log(req.body)
    const model = req.body.model
    const fuel = req.body.fuel
    const price = req.body.price
    console.log(model)
    console.log(fuel)
    console.log(price)
})

//삭제
app.delete('/car',(req,res)=>{
    console.log('car(DELETE)')
    console.log(req.body)
    const model = req.body.model
    const fuel = req.body.fuel
    const price = req.body.price
    console.log(model)
    console.log(fuel)
    console.log(price)
})

app.get('/car1/:model',(req,res)=>{
    console.log('/car1/:model')
    console.log(req.params)
    console.log(req.params.model)
})
app.get('/car2/:model&:fuel',(req,res)=>{
    console.log('/car2/:model&:fuel')
    console.log(req.params)
    console.log(req.params.model)
    console.log(req.params.fuel)
})
app.get('/car3/:model&:fuel&:price',(req,res)=>{
    console.log('/car3/:model&:fuel&:price')
    console.log(req.params)
    console.log(req.params.model)
    console.log(req.params.fuel)
    console.log(req.params.price)
})

//시작 후 대기상태
app.listen(PORT,()=>{ //arrow function - ES6
    console.log(`Server On: http://localhost:${PORT}`)
    //template string, template literal - ES6
})