function Student(name,age){
    this.name=name,
    this.age=age
}

Student.prototype.getDetails=function (){
    document.write(`Name:${this.name} </br> Age:${this.age}`)
}

let s1=new Student("Shradha",24);
s1.getDetails();