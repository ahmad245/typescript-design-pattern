import express from 'express';
import bodyParsser from 'body-parser';
import cookieSession from 'cookie-session';

import { AppRouter } from './AppRouter'
import './controllers/LoginController';
const app=express();

app.use(bodyParsser.urlencoded({extended:true}));
app.use(cookieSession({keys:['ahmad']}))

app.use(AppRouter.router());


app.listen(3000,()=>{
    console.log('server listen');
    
})
