const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=3000;

const app=express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    res.set('Content-Type', 'text/plain');
    res.send('Hello from server');
});
app.post('/save',(req,res)=>{
    console.log(req.body);
    res.status(200).send({"message":"data recieved"});
})

app.listen(PORT,function(){
    console.log("Server is running on localhost:"+PORT);
});