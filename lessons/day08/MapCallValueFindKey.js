/**
 * ****************************
 * Findkey from value 
 * Lesson: Map
 * ****************************
 */
// minh co 1 gia tri, muon tim key tuong ung trong map
const targetValue = 3;
// define tim thay key la chua co: undefined
let foundKey = undefined;
// tao new map, duyet tim tung phan tu trong map theo forEach voi doi so la 1 function, truyen vao value va key
// duyet tung value va key trong tung phan tu cua map, neu value giong voi gia tri muon tim thi log ra found key
new Map([
    ['foo', 3],
    ['bar', {}],
    ['baz', undefined],
    // cho nay ForEach no lap tung phan tu
]).forEach(function (value, key, map) {
    if (value ===targetValue) {
        foundKey = key;
        return;
    }
});

// Expected output: "m[foo] = 3"
// Expected output: "m[bar] = [object Object]"
// Expected output: "m[baz] = undefined"
//   Given a value, how do you find a key in a Map?
console.log(`\t==================Check case 1 ================`);
if (!foundKey) {
    console.log(`\tNot found ${targetValue}`);

} else {
    console.log(`\tValue ${targetValue} has found key: ${foundKey} from Map1`);
}
console.log(`\t==================Check case 2 ================`);

new Map([
    ['foo2', 4],
    ['bar2', {}],
    ['bar4', 3],
    ['baz2', undefined],
]).forEach(function (value, key, map) {
    if (value !==targetValue) {
        console.log("\tNot found");
    } else {
        console.log(`\tValue ${value} has found key: ${key} from Map2`);
    }
});