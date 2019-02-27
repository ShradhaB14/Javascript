

let wheather=[
    {day:'Sunday',sun:true},
    {day:'Monday',sun:false},
    {day:'Tuesday',sun:true},
    {day:'Tuesday',sun:false},
    {day:'Thursday',sun:true},
    {day:'Friday',sun:true},
]

let goOutSide=wheather.filter((temp)=>{
            return temp.sun
})


console.log(goOutSide)
