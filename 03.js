/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-08 17:38:41
 * @LastEditTime: 2019-09-08 18:10:03
 * @LastEditors: Please set LastEditors
 */
var foo = function(){
    console.log('foo1')
}
foo() //foo1

var foo = function(){
    console.log('foo2')
}
foo() //foo2


function foo(){
    console.log('foo1') 
}
foo()   //foo2
function foo(){
    console.log('foo2')
}
foo()   //foo2