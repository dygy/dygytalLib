Object.defineProperty(Array.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];

        for(let value=1 ;value<this.length; value++) {
            if (this[value] !== firstValue) {
                return false;
            }
        }

        return true;
    }
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
/*
let arr= [1,2,3,4,5,2];
console.log(arr);
arr.deleteIndex(0);
arr.deleteElementFromLeft(3);
arr.deleteElementFromRight(2);
console.log(arr);
*/
