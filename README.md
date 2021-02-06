#   DygytalLib 
A library of some basic functions, that not exist this easy way right now in JavaScript. <br>
It has Node and Pure JS implementation, they are just a bit different. <br>
To install you need to put in your console   ```npm i @upgradle/dygytallib```<br>
let's see how to use it at pure.<br>
```
<script src="@upgradle/dygytallib/pure/dygytal"> </script> 
<script> 
write('24'.reverse.toInt()+5) // 47 
</script> 
```
And now on node. <br>
```
const methods = require('@upgradle/dygytallib/node/dygytal');
methods.write('23'.reverse);
```
<br>
Now let's see one method by one. <br>

## allEqual <br>
after selecting an array or set, you can return boolean true or false, if every one of elem are same. <br>
```
let arr= [];
arr.push(1);
arr.push(2);
write(arr.allEqual); //false
```

## reverse <br>
reversing string of integer. Even the float numbers. Can be helpful at information security.<br> 
You may reverse MD5 on both server and client, so it won't be easy to understan.<br>
```
let int=125.39;
write(int.reverse);//39.521
```


## replaceAll(value) <br>
replacing all elements that equal to the given value.<br>
```
let str = 'hello'
write(str.replaceAll('l','2')) //he22o
```

## deleteAll(value) <br>
deleting all elements that equal to the given value.<br>
```
[1,1,2,1,3,1].deleteAll(1) //[2,3]
```

## deleteIndex(index) <br>

deleting element from array with given index. <br>
```[1,2,3].deleteIndex(0)//[2,3] ```

## deleteElementFromLeft(value) <br>
deleting first element from left, from array with given value. <br>
```[1,2,3,1].deleteElementFromLeft(1) // [2,3,1] ```

## deleteElementFromRight(value)  <br>
deleting first element from right, from array with given value. <br>
```[1,2,3,1].deleteElementFromRight(1) // [1,2,3] ```

## elem(index) <br>
returning the element from set with given index. <br>
```
let set= new Set();
set.add(1);
set.add(2);
write(set.elem(1)); //2
```
## write(_) <br>
writing a value as console.log , but if the value undefiend, than printing stack trace, <br>
that's not breaking programm, but showing exact line of Undefiend. <br> It can be used like this in Pure js
```
write(undefined);
// Trace: Undefiend!
//     at write (C:\Users\yukim\WebstormProjects\dygytalLib\pure\dygytal.js:68:17)
//     at Object.<anonymous> (C:\Users\yukim\WebstormProjects\dygytalLib\pure\dygytal.js:162:1)
//     at Module._compile (internal/modules/cjs/loader.js:702:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:713:10)
//     at Module.load (internal/modules/cjs/loader.js:612:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:551:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:543:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:744:10)
//     at startup (internal/bootstrap/node.js:238:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:572:3)
```
And like this in node
```
require('./node_modules/dygytalLib/node/dygytal').write(undefined);
```

## getURL() <br>
returning current URL value. <br> Working only for Pure, as you can't get URL of Node js.

```
write(getURL) //printing your curent URL
```


## insert(index) <br>
returning array with inserted one more value before given index. <br>
```let arr = [1,2]
arr.insert(1,[])
write(arr)//[ 1, [], 2 ]
```

## toInt() <br>
returning integer from given string. <br>
``` let num = '35'.toInt()+5 // 40 ```
## findFieldByName(json,fieldName) <br>
returning a  value from JSON by given name<br>
```
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
write(findFieldByName(jason ,'Arr'));  //[ '2', '2', [ '1' ], { Name: 'Lol' }, '1' ]
```
## includesBoth() <br>
returning bool, is every string in arguments where included. <br>
```'aaa bbb'.includesBoth('aaa', 'bbb') //true'```

## isJson() <br>
returning variable, if it is available to become JSON after parse . <br>
```'{}'.isJson() //{}'```

## SafeStorage
use it same as localstorage for getItem, setItem, removeItem, last argument is 
```options``` - you can put here ```local``` property to select error langs (```ru```, ```en```, ```es```)
it provides ability to don't check local storage permission and instructions to end user, how to enable it in browser.
