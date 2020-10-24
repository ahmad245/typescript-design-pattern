import  { Request, Response, Router, NextFunction } from 'express';

export function logger(req:Request,res:Response,next:NextFunction){
    console.log('logger');
    next();
 }