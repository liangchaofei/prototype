/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 11:10:32
 * @LastEditTime: 2019-09-08 17:06:05
 * @LastEditors: Please set LastEditors
 */

 //创建一个对象
function Person(){}
//对象实例化
var person = new Person()
//在实例上添加一个属性
person.name = 'aaa'
//在对象的原型上添加一个属性
Person.prototype.name= 'bbb'
var person1 = new Person()
var person2 = new Person()
console.log(person.name) //aaa
console.log(person1.name)   //bbb
console.log(person2.name)   //bbb

//如果不给Person.prototype上添加属性，则返回undefined,因为首先在实例上找这个属性，如果没有，则会在对象的原型上找，如果没有，则返回undefined
console.log(person1.name) //undefined
console.log(person2.name) //undefined



// Person.prototype = person.__proto__(实例原型)

// Person = Person.prototype.constructor 每个原型都有constructor属性指向构造函数

//获取对象原型
console.log(Object.getPrototypeOf(person) === Person.prototype) //true




// 实例和原型关系
function Person2(){}
Person2.prototype.name = 'aa'

var person2_1 = new Person2()
person2_1.name = 'bbb'

console.log(person2_1.name) //bbb
delete person2_1.name
console.log(person2_1.name) //aa


//原型的原型
var obj = new Object()
obj.name = 'curry'
console.log(obj.name)

//原型链
console.log(Object.prototype.__proto__ === null) //true