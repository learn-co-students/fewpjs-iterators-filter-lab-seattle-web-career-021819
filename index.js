// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers,name) {
  return drivers.filter((driver)=>{
    return driver.toLowerCase() === name.toLowerCase()
  })
}


function fuzzyMatch(drivers,char){
  let checkLength = char.length
  return drivers.filter((driver)=>{
    return driver.slice(0, checkLength) === char
  })
}

function matchName(obj, name){
  return obj.filter((item)=>{
    return item.name === name
  })
}
