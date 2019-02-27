let car= function(name,id){
    this.name=name;
    this.id=id;
}

car.prototype ={
    display(){
        console.log("In Car");
    }
}

let bus =function(name,id,wheels){
    car.call(this,name,id)
    
    this.wheels=wheels
}

bus.prototype={
    display(){
        console.log("In bus");
    }
}


bus.prototype=Object.create(car.prototype)
console.log("azxss",bus);
console.dir(bus)
bus.prototype.constructor=bus;
// const carObj = new car('abc',1);
// const busObj = new bus(4);
console.dir(bus)
// console.log(carObj.display())
// console.log(busObj.display())