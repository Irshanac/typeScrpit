let username="irshana"
let number=3000
let number1:number=123
let arr1:string[]=["a","b","c"] 
interface Details{
    name:string;
    age:number;
    salary:number;
    getName:()=>void
}
let userDetails:Details={
    name:"irshana",
    age:12,
    salary:1000,
    getName() {
        console.log("irshana")
    },
}
console.log("useDta",userDetails)
type adminData={name:string,age:number,place:string}
const data:adminData={
    name:"irshana",
    age:123,
    place:"kodakkalu"
}
console.log(data)