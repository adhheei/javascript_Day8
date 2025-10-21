let obj1={name:"Adhi",age:21,place:{pin:679572}};
let cloneObj={...obj1};

cloneObj.name="adithya";
obj1.place.pin="679552";

console.log(obj1);
console.log(cloneObj);