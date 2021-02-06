Object.defineProperty(Array.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];
        for(let value=1 ;value<this.length; value++) {
            if (this[value] !== firstValue) {
                return false;}}
        return true;}
});
Object.defineProperty(Set.prototype, "allEqual", {
    get: function() {
        let firstValue = this[0];
        for(let value=1 ;value<this.size; value++) {
            if (this.elem(value) !== firstValue) {
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
Set.prototype.deleteAll= function (value) {
    while (this.has(value)) {
        this.delete(value)
    }};
Array.prototype.deleteIndex= function (index) {
    this.splice(index,1)
};
Set.prototype.deleteIndex= function (index) {
    this.delete(this.elem(index))
};
Array.prototype.deleteElementFromLeft= function (value) {
    let index = this.indexOf(value);
    this.splice(index,1)
};
Array.prototype.deleteElementFromRight= function (value) {
    let index = this.lastIndexOf(value);
    this.splice(index,1)
};
Set.prototype.elem = function(index){
    let iterator1 = this.values();
    while (index > 0) {
        iterator1.next().value;
        index--;
    }
    return iterator1.next().value;
};
function write(_, options={}) {
    if (options.trace){
        console.trace(_)
    }
    else if (_ ===undefined){
        console.trace('Undefiend!')
    }
    else {
        options.flag
            ? console.log(_, options.flag)
            : console.log(_)
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
String.prototype.toInt = function () {
    return parseInt(this)
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
String.prototype.includesBoth = function () {
    let isSuccess = true;
    Object.values(arguments).forEach(e=>{
        if (!this.includes(e)){
            isSuccess = false
        }
    })
    return isSuccess
};
const SafeStorage = {
    setItem: function (key, value, options = {}) {
        if (!key) {
            return;
        }
        const newValue = typeof value === 'object' ? JSON.stringify(value) : value;
        try {
            localStorage.setItem(key, newValue);
            return true;
        } catch (e) {
            alert(instruction[options.local||'en'])
            return false;
        }
    },
    getItem: function (key, options={}) {
        try {
            const result = localStorage.getItem(key);
            const isJson = result?.isJson()
            return isJson ? isJson : result;
        } catch (e) {
            alert(instruction[options.local||'en'])
            return false;
        }
    },
    removeItem: function (key, options={}) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            alert(instruction[options.local||'en'])
            return false;
        }
    }
}

String.prototype.isJson= function (){
    try {
        return JSON.parse(this)
    } catch (e) {
        return false;
    }
}

const instruction = {
    en: `Please allow local storage. \n
                For Safari: \n
                1. Click the “Safari” menu and choose “Preferences”. \n
                2. Click the icon labeled “Privacy”. \n
                3. Set the option labeled “Block Cookies:” to “Never”. \n
                4. Close the window. \n 
                for Chrome: \n
                1. Click the “Tools” menu and choose “Internet Options”.\n
                2. Click on the tab labeled “Advanced”.\n
                3. Check the box for “Enable DOM Storage”.\n
                4. Click “OK”.\n
                from Mozilla: \n
                1. Click the menu button Menu and select Preferences.\n
                2. Select the Privacy & Security panel and go to the Cookies and Site Data section.\n
                `,
    ru:`
    Разрешите локальное хранилище. \n
                 Для Safari: \n
                 1. Щелкните меню «Safari» и выберите «Настройки». \n
                 2. Щелкните значок «Конфиденциальность». \n
                 3. Установите для параметра «Блокировать файлы cookie:» значение «Никогда». \n
                 4. Закройте окно. \n
                 для Chrome: \n
                 1. Щелкните меню «Инструменты» и выберите «Свойства обозревателя». \n
                 2. Щелкните вкладку «Дополнительно». \n
                 3. Установите флажок «Включить хранилище DOM». \n
                 4. Щелкните «ОК». \n
                 из Mozilla: \n
                 1. Нажмите кнопку меню «Меню» и выберите «Настройки». \n
                 2. Выберите панель «Конфиденциальность и безопасность» и перейдите в раздел «Файлы cookie и данные сайта». \n`,
    es:`
    Permita el almacenamiento local.\n
                 Para Safari:\n
                 1. Haga clic en el menú "Safari" y seleccione "Preferencias".\n
                 2. Haga clic en el icono con la etiqueta "Privacidad".\n
                 3. Configure la opción denominada "Bloquear cookies:" en "Nunca".\n
                 4. Cierre la ventana.\n
                 para Chrome:\n
                 1. Haga clic en el menú "Herramientas" y seleccione "Opciones de Internet".\n
                 2. Haga clic en la pestaña denominada "Avanzado".\n
                 3. Marque la casilla de "Habilitar almacenamiento DOM".\n
                 4. Haga clic en "Aceptar".\n
                 de Mozilla:\n
                 1. Haga clic en el botón de menú Menú y seleccione Preferencias.\n
                 2. Seleccione el panel Privacidad y seguridad y vaya a la sección Cookies y datos del sitio.\n
    `,
}