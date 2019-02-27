class Person{
    constructor(name){
            this.name=name;
    }
    toString_Person(){
        return "Name:",this.name 
    }
}

class Student extends Person{
    constructor(name,Sid){
        super(name)
        this.Sid=Sid
    }
    toString_Student(){
        return super.toString_Person()+"Sid:"+this.Sid
    }
}

let s1=new Student("Shradha",1)
document.write(s1.toString_Student());

