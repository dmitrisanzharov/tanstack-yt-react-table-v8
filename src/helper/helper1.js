function add1(arg){
    return arg + 1;
}

// object

const myObj1 = {
    anyKey: add1
}

let a = myObj1['anyKey'](10);
console.log(a);

// variables

const anyConst = add1;

let b = anyConst(10);
console.log(b);

