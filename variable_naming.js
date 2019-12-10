// գոյություն ունեն 3 հիմնական փոփոխականների անված style-եր dart_style, camelCase, UPPER_CASE

let some_name;
let someName;
let SOME_NAME;

// convention-ով bool փոփոխականները սկսվում են is բառով իսկ function-ների անունները գործողություն արտահայտող բառով

let name = "Gor";
function displayName(){
    console.log(name)
};
function getName(){
    return name
};
function setName(newName){
    name = newName
};
function deleteName(){
    name = null
};