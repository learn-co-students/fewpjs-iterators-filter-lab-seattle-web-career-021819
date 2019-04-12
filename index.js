function findMatching(array, string) {
  return array.filter(name => name.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(array, string) {
  return array.filter(name => name.slice(0, string.length) === string)
}

function matchName(array, string) {
  return array.filter(obj => obj.name === string)
}
