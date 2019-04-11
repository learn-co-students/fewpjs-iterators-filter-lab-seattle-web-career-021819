function findMatching(drivers, string) {
  let result = drivers.filter(n => n.toLowerCase() === string.toLowerCase());
  return result;
}

function fuzzyMatch(drivers, string) {
  let result = drivers.filter(n => n.slice(0, (string.length+1)*(-1)) === string)
  return result;
}

function matchName(drivers, string) {
  let result = drivers.filter(n => n["name"] === string);
  return result;
}
