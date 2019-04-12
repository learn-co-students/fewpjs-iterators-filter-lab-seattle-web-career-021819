// Code your solution here
function matchName(drivers, name){
     let results=[];
     for(let i=0;i<drivers.length;i++){
          if (drivers[i].name===name){
               results.push(drivers[i])
          }
     }
     return results;
}

function fuzzyMatch(drivers, name){
     let results=[];
     for(let i=0;i<drivers.length;i++){
          if(drivers[i].startsWith(name)){
               results.push(drivers[i])
          }
     }
     return results;
}

function findMatching(drivers, name){
     let results=[];
     for(let i=0;i<drivers.length;i++){
          if (drivers[i].toLowerCase()===name.toLowerCase()){
               results.push(drivers[i])
          }
     }
     return results;
}