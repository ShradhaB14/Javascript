let weather =[90,80,50,10,9,60]

let outSide=weather.filter((temp)=>{
        return temp>50
})

console.log(outSide)