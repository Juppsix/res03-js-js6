let timeout = setTimeout(function(){
    alert("BRUUUUUUUUUUUUUh");
    
}, 3200);

//let date = new Date();

//let hours = date.getHours();
//let minutes = date.getMinutes();
//let secondes = date.getSeconds();

//let intervalId = setInterval(function(){
    //alert( "Il est "+hours+" heure "+minutes+" minutes "+secondes+" secondes");
//}, 4200);

let times = [1, 2, 3];
let timeout2 = setTimeout(function(){
        console.log(times[0]);
        
        let timeout2 = setTimeout(function(){
        console.log(times[1]);
        
            let timeout2 = setTimeout(function(){
        console.log(times[2]);
        
            },3000);
            
        }, 2000);
        
}, 1000);