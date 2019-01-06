import { Skill } from "./skill.model";
import { Experience } from "./experience.model";

export class User{
    id?:string
    firstname:string=null
    lastname:string=null
    email:string=null
    profile_image:string=null
    video_resume:string=null
    dateofbirth:Date= null
    phone:string=null
    gender:string=null
    skills:Skill[]=[]
    experience:Experience[]=[]
}