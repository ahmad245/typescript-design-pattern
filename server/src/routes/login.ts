// import  { Request, Response, Router } from 'express';
// const route=Router();

// route.post('/login',(req:Request,res:Response)=>{
   
//     const {email,password}=req.body;
//     if(email && password && email==='ahmad@gmail.com' && password==="aaa"){
//         req.session={loggedIn:true};
//         res.redirect('/');
//     }
//     else{
//         res.send('not permitions');
//     }
   


// })
// route.get('/login',(req:Request,res:Response)=>{
//     const form=`
//     <form method="post" action="/login">
//      <div>
//       <h1>login form</h1>
//       <input type="email" name="email">
//       <input type="password" name="password">
//       <button type="submit">login</button>
//      </div>
//     </form>
//     `;
//     res.send(form);


// })

// route.get('/',(req:Request,res:Response)=>{
//   if(req.session && req.session.loggedIn){
//      res.send(`
//      <div> you are logged in </div>
//      <a href="/logout">Logout</a>
//      `)
//   }
//   else{
//     res.send(`
//     <div> you not logged in </div>
//     <a href="/login">login</a>
//     `)
//   }
// })
// route.get('/logout',(req:Request,res:Response)=>{
//         req.session=null;
//         res.redirect('/')
// })

// export {
//     route
// }