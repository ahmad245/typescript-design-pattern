import express from 'express';

export class AppRouter{
    private static instance:express.Router;
    static router(){
        if(!AppRouter.instance){
            AppRouter.instance=express.Router({mergeParams:true});
        }
        return AppRouter.instance;
    }
}