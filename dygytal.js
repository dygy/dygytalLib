Object.defineProperty(Array.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];
        for(let value=1 ;value<this.length; value++) {
            if (this[value] !== firstValue) {
                return false;}}
        return true;}
});
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
    while (index > 1) {
        iterator1.next().value;
        index--;
    }
    return iterator1.next().value;
};
function write(value) {
    console.log(value);
}
/*
let set= new Set();
set.add(2);
set.add(2);
console.log(set);
console.log(set.elem(1));
console.log(set.allEqual);

let arr= [1,2,3,4,5,2];
console.log(arr);
arr.deleteIndex(0);
arr.deleteElementFromLeft(3);
arr.deleteElementFromRight(2);
console.log(arr);
*/
