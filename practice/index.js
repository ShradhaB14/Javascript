console.log("In js!!")

function clickMe(){
console.log("in click me")
document.write("this content is from JS SS")

var a=10
try{
    if(a!=100)
    throw("num doesnt match");
    else
    alert("the value of a :"+a)
    
}
catch(e){
    alert("ERROR")
}

let obj={
    id:1,
    name:'Shradha',
    age:24
}

console.log(JSON.stringify(obj));

let Dog=function(color,breed){

    this.color=color;
    this.breed=breed;
}

let dog1=new Dog('black','xyz')
console.log("In dog 1",dog1);


Dog.prototype.age=2
let dog2=function(){}
 dog2.prototype=Object.create(Dog.prototype)
console.log("in dog2",dog2);
console.log(JSON.stringify(dog2));
let dog3=function(){};

 dog3.prototype=Object.create(dog2.prototype);
console.log("IN dog3",dog3)
console.dir(dog3);
console.log(JSON.stringify(dog3));
let car= function(){}

car.prototype ={
    display(){
        console.log("In Car");
    }
}

let bus =function(){}

bus.prototype={
    display(){
        console.log("In bus");
    }
}

const carObj = new car();
const busObj = new bus();

console.log(carObj.display())
console.log(busObj.display())
console.dir(carObj);
console.dir(busObj)
}