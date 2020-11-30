function isTriangle(a,b,c){
    if (a <= 0 || b <= 0 || c <= 0){return false;}
    if (a+b <= c){return false;}
    if (a+c <= b){return false;}
    if (b+c <= a){return false;}
    return true;
}
var possibleTriangles = [
    [1,1,1],
    [3,4,5],
    [1,2,3],
    [5,12,13],
    [-1,-1,-1]
];

// ES5
var isTriangleArrES5 = [];
possibleTriangles.forEach(function(ele) {
  isTriangleArrES5.push(isTriangle.apply(null, ele));
});
console.log(isTriangleArrES5);

//ES6
const isTriangleArrES6 = possibleTriangles.map((ele) => isTriangle(...ele));
console.log(isTriangleArrES6);
