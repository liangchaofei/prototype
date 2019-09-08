/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 11:10:32
 * @LastEditTime: 2019-09-04 11:37:25
 * @LastEditors: Please set LastEditors
 */
function Person(){}

var person = new Person()
person.name = 'aa'
Person.prototype.name= 'bb'
var person1 = new Person()
var person2 = new Person()
console.log(person.name)
console.log(person1.name)
console.log(person2.name)
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