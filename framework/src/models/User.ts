import { IUserProp } from "../interfaces/UserProp";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Model } from "./Model";
const rootUrl = 'http://localhost:3000/users';
export class User extends Model<IUserProp>{
   static buildUser(attrs:IUserProp):User{
       return new User(
           new Attributes<IUserProp>(attrs),
           new Eventing(),
           new ApiSync(rootUrl)
           )
   }
}