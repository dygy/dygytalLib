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
function findFieldByName(json,fieldName) {
    let str= JSON.stringify(json);
    let regExObj = new RegExp('\"'+ fieldName+'\"' + '\\:\\{(\\n|.)*?\\}');
    let regExStr = new RegExp('\"'+ fieldName+'\"' + '\\:\\"(\\n|.)*?\\"');
    let regExNum = new RegExp('\"'+ fieldName+'\"' + ':((\\d|.|x)+?)');
    let regExArr = new RegExp('\"'+ fieldName+'\"' + ':\\[(.)*\\]');
    if (regExStr.test(str)) {
        //    write('\' \'')
        return regExStr.exec(str)[0].replace('\"'+ fieldName+'\":','')
    }
    else if (regExObj.test(str)) {
        //    write('JSON')
        return JSON.parse(regExObj.exec(str)[0].replace('\"'+ fieldName+'\":',''))
    }
    else if (regExArr.test(str)) {
        //    write('Arr[]')
        let arr = regExArr.exec(str)[0].replace('\"'+ fieldName+'\":','').replace('[','').replace(/$\]/,'').split(',');
        write(arr)
        for (let i = 0; i < arr.length; i++) {
            if (/\[(.+)]/.test(arr[i])) {
                arr[i]=arr[i].replace('[','').replace(/$\]/,'').split(',')
                for (let y = 0; y < arr[i].length; y++) {
                    if (/]+/.test(arr[i])){
                        arr[i][y]= arr[i][y].replace(/]+/,'')
                    }
                }
            }
            else if (/{(.+)}/.test(arr[i])) {
                arr[i]=JSON.parse(arr[i])
            }
            else if (/]+/.test(arr[i])){
               arr[i]= arr[i].replace(/]+/,'')
            }
        }
    return arr
    }
    else if (regExNum.test(str)) {
        //    write('int')
        return parseInt( regExNum.exec(str)[0].replace('\"'+ fieldName+'\":',''))
    }

}
/*
let jason = {
    Cool:{
        Age:0,
        Sage:1
    },
    NotCool:{
        Name:'',
        Flame:'',
        Arr:[2,2,[1],{Name:'Lol'},1]
    }
};
write(findFieldByName(jason ,'Arr'));
/*



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
