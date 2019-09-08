/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-08 17:11:11
 * @LastEditTime: 2019-09-08 17:33:50
 * @LastEditors: Please set LastEditors
 */
var value = 1;


function foo(){
    console.log(value)
}

function bar(){
    var value = 2;
    foo()
}
bar() //1

var scope = "global scope"
function checkscope(){
    var scope = "local scope"
    function f(){
        return scope;
    }
    return f()
}
console.log(checkscope()) //local scope

var scope2 = "global scope";
function checkscope2(){
    var scope2 = "local scope";
    function f(){
        return scope2;
    }
    return f;
}
console.log(checkscope2()()) //local scope