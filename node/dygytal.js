let methods = {

    allEuqa: function (arr){
    let firstValue = arr[0];
        for(let value=1 ;value<this.length; value++) {
            if (arr[value] !== firstValue) {
                return false;}}
        return true;
},
    reverseString: function (string) {
        let arr = string.split('');
        arr.reverse();
        return arr.join('')
},
    reverseNum: function (num) {
let arr = num.toString().split('');
        arr.reverse();
        if (arr.indexOf('.')!==-1){
            return parseFloat(arr.join(''))

        }
        else {
            return parseInt(arr.join(''))
        }
    },
    deleteAllLike: function  (arr,value) {
        while (arr.includes(value)) {
            arr.splice(arr.indexOf(value),1)
        }
},
    deleteIndex: function  (arr,index) {
    arr.splice(index,1)
},
    deleteElementFromLeft: function  (arr,value) {
    let index = arr.indexOf(value);
    arr.splice(index,1)
},
    deleteElementFromRight: function  (arr,value) {
    let index = arr.lastIndexOf(value);
    arr.splice(index,1)
},
    allEqualSet: function (set) {
        let firstValue = set[0];
        for(let value=1 ;value<set.size; value++) {
            if (set.elem(value) !== firstValue) {
                return false;}
        }return true;
},
    elemFromSet: function (set,index){
    let iterator1 = set.values();
    while (index > 0) {
        iterator1.next().value;
        index--;
    }
    return iterator1.next().value;
},
    write: function (_) {
    if (_ ===undefined){
        console.trace('Undefiend!')}
    else {console.log(_)}
},
    insertInArr: function (arr,index) {
    arr.splice.apply(this, [index, 0].concat(
        Array.prototype.slice.call(arguments, 1)));
    return this;
}
};
module.export = methods;