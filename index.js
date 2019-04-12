// Code your solution here
const findMatching = (drivers, string) => {
  return drivers.filter(function(drive){
    return drive.toUpperCase() === string.toUpperCase()
  })
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(function(drive){
    return drive[0] === string[0]
  })
 }

 const matchName = (drivers, string) => {
   return drivers.filter(function(drive){
     return drive.name === string
   })
 }
