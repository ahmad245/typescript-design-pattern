import { Request, Response, NextFunction } from "express";

export function validate(keys:string[]){
     return function(req:Request,res:Response,next:NextFunction){
         console.log('middleware',keys);
         
        if(!req.body) {
            res.status(422).send('invalid request !');
            return ;
        }

        for (const item of keys) {
            if(!req.body[item]){
                res.status(422).send('invalid request !');
                return ; 
            }
        }
        next();
     }
}