//var-ը ենթարկվում է hoisting-ի, իսկ let,const-ը ոչ

console.log(a);
var a = 15;
console.log(a);

console.log(b);
let b = 15;
console.log(b);

console.log(c);
const c = 15;
console.log(c);

//const/let-ը ամեն {} բլոկ-ի մեջ ունի իր սեփական name spacing-ը, իսկ var-ը ոչ

{
    var t = 15;
}
console.log(t)

{
    let r = 10;
    const k = 15;
    console.log(r,k);
}
console.log(r,k);

// const-ը չի փոփոխում իր արժեքը, սակայն կարող է փոխել իր արժեքի property-նեը

const obj = {
    name : "Levon"
};
console.log(obj);
obj.name = "Gor";
console.log(obj)

// var-ով փոփոխականները կարող են նորից հայտարարվել(overwrite լինել), իսկ let/const-ը ոչ

var o = 15;
var o = 24;
console.log(o);

let p = 15;
let p = 24;
console.log(p)