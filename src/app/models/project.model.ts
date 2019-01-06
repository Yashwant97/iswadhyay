export class Project{
    title:string=null
    technology:string[]=[]  // all technologies that will be used eg ['python','IOT','SQL']
    aim:string=null         // describe project in single statement like in practical file
    video?:string=null      // 'url' video of finished product or anything related to tutorial
    pictures:string[]=[]    // ['url1','url2',...] of project/tutorials
    outcome:string[]=[]     // outcome of tutorial in multiple points
    prerequisite:string[]=[]// knowledge or materials in points
    duration:string=null    // in hours
    description:string=null // detailed long description about project

}