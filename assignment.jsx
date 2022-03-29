    const Emp = [{
        id : 1,
        name : 'Hadi',
        designation : 'Account Executive'
    },{
        id : 2,
        name : 'Hanzala',
        designation : 'CFO'
    },{
        id : 3,
        name : 'Aamir',
        designation : 'CEO'
    },{
        id : 4,
        name : 'Akhai',
        designation : 'IT'
    },{
        id : 5,
        name : 'Asim',
        designation : 'Director IT'
    },]
    
    
// with map function
    let result = Emp.map(function(x){
        return x.name
    })    
// with forEach function
     let xa = [];
     let result12 = Emp.forEach(function(key , Index){
        xa.push(key.id)
     })
    
    console.log(xa);
    console.log(result)

    