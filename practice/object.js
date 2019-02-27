//Thei are two ways of creating an object

//creating object by usimg object literal

let person={

    id:1,
    name:'Shradha',


    getName:function(){
            return this.name
    }
}


document.write("Name:",person.getName());


