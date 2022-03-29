 
   
let Emp = [{
    id : 1,
    name : 'Hammad',
    designation : 'Account Executive'
},{
    id : 2,
    name : 'Haris',
    designation : 'Team Lead'
},{
    id : 3,
    name : 'Aamir',
    designation : 'CEO'
},{
    id : 4,
    name : 'Hunaina',
    designation : 'Devops'
},{
    id : 5,
    name : 'Asim',
    designation : 'Director IT'
},]

 
// with map function
let printKey = Emp.map(function(x , Index){
    return Index
})
let printValue = Emp.map(function(x){
    return x.name
})

//map
console.log("Code using Map Function")
console.log(printKey)
console.log(printValue)

// with forEach function
 let printKey1 = [];
 let result12 = Emp.forEach(function(key , Index){
    printKey1.push(Index)
 })
 
  let printValue1 = [];
 let result13 = Emp.forEach(function(key , Index){
    printValue1.push(key.name)
 })   


// foreach
console.log("Code using forEach Function")
console.log(printKey1);
console.log(printValue1);



