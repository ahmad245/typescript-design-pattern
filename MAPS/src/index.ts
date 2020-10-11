import { User } from "./User";
import {Company} from './Company';
import { CustomMap } from "./CustomMap";


const user=new User();
const company=new Company()

const customMap=new CustomMap('mapid');
customMap.addMarker(user);
customMap.addMarker(company);


