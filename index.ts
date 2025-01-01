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


//uinion and intersector
let Skills:(string | number)[]=["asb","asx",1,2]

//function 
function getUsername(userDetails:Details){
console.log(userDetails.getName)
}
getUsername(userDetails)
//function
function add (num1:number,num2:number):number{
    return num1 + num2
}
console.log(add(3,4))
//generic
function getage<t>(age:t):t{
    return age
}
getage<number>(20)
getage<string>("20")
//as const
let readonly="irshana" as const
