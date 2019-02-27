function Student(firstName,lastName){
this.firstName=firstName;
this.lastName=lastName
}

Student.prototype.getFullName=function(){
    document.write("FullName",this.firstName,this.lastName);
}
var s1=new Student("Shradha","Bhandare")
s1.getFullName()