// a map is an unordered collection of key-value pairs. Both keys and values
// can be of any data type

const map = new Map([['a', 1], ['b', 2]]); // accepts an array
map.set('c', 3);
map.delete('b');
console.log(map.has('a'));
console.log(map.size);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}


