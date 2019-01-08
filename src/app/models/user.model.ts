import { Skill } from "./skill.model";
import { Experience } from "./experience.model";
import { Education } from "./education.model";

export class User{
// not required    id?:string                  // id of doc in firestore
    firstname?:string=""
    lastname?:string=""
//    email?:string=""
    profile_image?:string=""   // url
    video_resume?:string=""    //url
    dateofbirth?:Date= null
    phone?:number=0
    gender?:string=""          
    skills?:Skill[]=[]           // as imported
    experience?:Experience[]=[]
    education?:Education[]=[]
}