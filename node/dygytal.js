module.exports.allEqual =function allEqual (arr){
    let firstValue = arr[0];
    for(let value=1 ;value<arr.length; value++) {
        if (arr[value] !== firstValue) {
            return false;}}
    return true; };

module.exports.reverseString = function reverseString(string) {
    let arr = string.split('');
    arr.reverse();
    return arr.join('')
};

module.exports.reverseNum = function reverseNum(num) {
    let arr = num.toString().split('');
    arr.reverse();
    if (arr.indexOf('.') !== -1) {
        return parseFloat(arr.join(''))
    } else {
        return parseInt(arr.join(''))
    }
};

module.exports.deleteAllLike = function deleteAllLike(arr, value) {
    while (arr.includes(value)) {
        arr.splice(arr.indexOf(value), 1)
    }
};

module.exports.deleteArrIndex = function deleteIndex(arr, index) {
    arr.splice(index, 1)
};

module.exports.deleteElementFromLeftArr = function deleteElementFromLeft(arr, value) {
    let index = arr.indexOf(value);
    arr.splice(index, 1)
};

module.exports.deleteElementFromRightArr = function deleteElementFromRight(arr, value) {
    let index = arr.lastIndexOf(value);
    arr.splice(index, 1)
};

module.exports.allEqualSet = function allEqualSet(set) {
    let firstValue = set[0];
    for (let value = 1; value < set.size; value++) {
        if (set.elem(value) !== firstValue) {
            return false;
        }
    }
    return true;
};
module.exports.elemFromSet = function elemFromSet(set, index) {
    let iterator1 = set.values();
    while (index > 0) {
        iterator1.next().value;
        index--;
    }
    return iterator1.next().value;
};
module.exports.write = function write(_) {
    if (_ === undefined) {
        console.trace('Undefiend!')
    } else {
        console.log(_)
    }
};
module.exports.insertInArr = function insertInArr(arr, index) {
    arr.splice.apply(arr, [index, 0].concat(
        arr.slice.call(arguments, 1)));
    return arr;
};
module.exports.replaceAll = function (str, value, withA) {
    let regex = new RegExp(value, 'g');
    return str.replace(regex, withA)
};
module.exports.findFieldByName = function (json,fieldName) {
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

};

