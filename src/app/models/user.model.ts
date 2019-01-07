import { Skill } from "./skill.model";
import { Experience } from "./experience.model";
import { Education } from "./education.model";

export class User{
    id?:string                  // id of doc in firestore
    firstname?:string=null
    lastname?:string=null
    email?:string=null
    profile_image?:string=null   // url
    video_resume?:string=null    //url
    dateofbirth?:Date= null
    phone?:number=null
    gender?:string=null          
    skills?:Skill[]=[]           // as imported
    experience?:Experience[]=[]
    education?:Education[]=[]
}