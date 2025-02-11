/**
 * ****************************
 * Map
 * ****************************
 */
// create instant type = map
const emergencyList= new Map([
    ['113','Police Dept'],
    ['114','Fire Dept'],
    ['115','Hospital '],
    ['116','Others'],
    ['116','...'],
])
console.log(emergencyList.get('116'));
//  check if key is existing
const is117Existing=emergencyList.has('117');
console.log(`is 117 existing: ${is117Existing}`);
//  loop over all keys then get value
for(const key of emergencyList.keys()){
    console.log(`${key}:${emergencyList.get(key)}`);
    
}

// loop over value only
for(const value of emergencyList.values()){
    console.log(`Value: ${value}`);
    
}
//  Update
// emergencyList.set('116', 'Something else');
console.log(emergencyList);
// delete
console.log(`Size: ${emergencyList.size}`);
emergencyList.delete('116');
console.log(emergencyList);
console.log(`Size after:${emergencyList}`);


