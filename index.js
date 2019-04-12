// Code your solution here
function findMatching(arr, name){
  let result = arr.filter(n => {
    return n.toLowerCase() === name.toLowerCase()
  })
  return result
}

function fuzzyMatch(arr, letters){
  let lettersLength = letters.length
  let result = arr.filter(n => {
    return n.slice(0, lettersLength) === letters
  })
  return result
}

function matchName(arr, name){
  let result = arr.filter(n => {
    return n.name === name
  })
  return result
}
