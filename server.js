const express=require('express');
const bodyParser=require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors=require('cors');
const app=express();
const register=require('./controllers/register');
const signin=require('./controllers/signin');
const profile=require('./controllers/profile');
const image=require('./controllers/image');
const db=require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'gayi',
    database : 'test'
  }
});

app.use(bodyParser.json());
app.use(cors());



app.get('/',(req,res)=>{ 
	res.send(database.users);
})

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)})
	
app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})

app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)})

app.put('/image',(req,res)=>{image.handleImage(req,res,db)})

app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)})

app.listen(3001,()=>
{
	console.log("app server mode on")
})
