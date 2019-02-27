class Student{
   constructor(firstName,lastName){
        this.firstName=firstName,
        this.lastName=lastName
   }

   getDetails(){
       document.write(`Name:${this.firstName} ${this.lastName}`)
   }
}

let s1=new Student("Shradha","Bhandari");
s1.getDetails();