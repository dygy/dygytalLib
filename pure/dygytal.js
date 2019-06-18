Object.defineProperty(Array.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];
        for(let value=1 ;value<this.length; value++) {
            if (this[value] !== firstValue) {
                return false;}}
        return true;}
});
Object.defineProperty(String.prototype, "reverse", {
    get: function() {
        let arr = this.split('');
        arr.reverse();
        return arr.join('')
    }
});
Object.defineProperty(Number.prototype, "reverse", {
    get: function() {
        let arr = this.toString().split('');
        arr.reverse();
        if (arr.indexOf('.')!==-1){
            return parseFloat(arr.join(''))
        }
        else {
            return parseInt(arr.join(''))
        }}});
Array.prototype.deleteAll= function (value) {
    while (this.includes(value)) {
        this.splice(this.indexOf(value),1)
    }};
Array.prototype.deleteIndex= function (index) {
    this.splice(index,1)
};
Array.prototype.deleteElementFromLeft= function (value) {
    let index = this.indexOf(value);
    this.splice(index,1)
};
Array.prototype.deleteElementFromRight= function (value) {
    let index = this.lastIndexOf(value);
    this.splice(index,1)
};
Object.defineProperty(Set.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];
        for(let value=1 ;value<this.size; value++) {
            if (this.elem(value) !== firstValue) {
                return false;}}
        return true;}
});
Set.prototype.elem = function(index){
    let iterator1 = this.values();
    while (index > 0) {
        iterator1.next().value;
        index--;
    }
    return iterator1.next().value;
};
function write(_) {

    if (_ ===undefined){
        console.trace('Undefiend!')
    }
    else {
        console.log(_)
    }
}
function getURL(){
   return location.href
}
Array.prototype.insert = function(index) {
    this.splice.apply(this, [index, 0].concat(
        Array.prototype.slice.call(arguments, 1)));
    return this;
};
String.prototype.replaceAll = function (value, withA) {
    let regex = new RegExp(value,'g');
    return this.replace(regex,withA)
};

/* To fix
let jason = {
    Cool:{
        Age:0,
        Sage:1
    },
    NotCool:{
      Name:'',
      Flame:''
    }
};
console.log(findValue(jason ,'NotCool'));

function findValue(json,fieldName) {
    let str= JSON.stringify(json);
    let regEx = new RegExp(fieldName+'\\:\\{(\\n|.)*?\\}');
    if (regEx.test(str)) {
        return regEx.exec(str)
    }

    console.log(regEx)
    //TODO:: if '', if int, if array
}
//let str = 'hello'
//write(str.replaceAll('l','2')) he22o
//let int=125.39;
//write(int.reverse);
/*
let set= new Set();
set.add(1);
set.add(2);
write(set.elem(1)); //2
write(set.allEqual);
write [1,2,3,4,5,2];
arr.deleteIndex(0); //2,3,4,5,2
[1,1,2,1,3,1].deleteAll(1) //[2,3]
*/
