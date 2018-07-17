class test{

    test(){}
   
   
}

 const  obj = {
        "a":1,
        "b":"hello",
        "c":{
            c1:true,
            c2:88
        }
    }
obj.b=[1,
    {
        "x":"hello",
        "y":"world"
    },
    3,4]

console.log(obj.a);
console.log(obj.b);
console.log(obj.c);


/**
 * assign 对于对象的作用 对于数组的作用
 */


Object.assign(obj,{         //添加 替换  合并 对象
    
    "a":6, //替换
    "s":false//添加
});    
console.log(obj.a);
console.log(obj);



////////////////////////////////////////////////////////

//Object.keys(obj).forEach(item=>{
// console.log(item)
// })
/**
 * Json
 *  stringfy
 */

/**
 * Object .keys  .values   .entries  
 */

let arr = [1,2,3,4];

/////////////////////////////////////////////////////////


/**
 * Array
 * 
 * map 
 * forEach
 * splice
 * 
 * 
 * 
 * 1.如何判断array是数组
 *      const x = [1,2,3,4]
 *      x instanceof Array
 * 2.除了点 如何返回对象的键值
 *      x.b
 *      x["b"]
 * 3.父子键重复
 *      无影响 
 *      原型链 
 */

    const obj5 = {
        "a":12,
        "b":66,
        "c":{
            "a":"hello ",
            "b":"world"
        }
    }
    console.log(obj5)

 ////////////////////////////////////////////////////////
/**
 * 函数
 */

 //1.
 const fun=function(){
     console.log('hello world')
 }
 fun()

 //2.
 function fun2(){
    console.log('hello world2')

 }
//3.

const sum=(x,y)=>{
    return x+y
}

 ////////////////////////////////////////////////////////

 /**
  * map
  */

  const x = [1,2,3].map((it,idx)=>{         //箭头函数
      return it+1
  })
  console.log(x)
  /**
   * 4.  字符串 map
   */
  const people=["Jhon","Bown"]
  people1 = people.map((it,id)=>{

    return "Hello"+it
  })
  
  console.log(people1)



 ////////////////////////////////////////////////////////

/**
 * 入栈出栈
 * 
 * 在末尾
 *  push
 *  pop
 * 
 * 在头部
 *  shift 
 *  unshift
 */



////////////////////////////////////////////////////////
/**
 * Class
 */

 class User{
     constructor(name){
         this.name = name
     }
     getUserName(){
         return this.name
     }
     setUserName(name)
     {
         this.name=name
     }
 }

let u = new User("ZHL")
u.getUserName()
u.setUserName("LL")
/**
 * 5. 定义一只小狗
 *   sayHello(name){}
 *   
 */

/**
 * 继承
 */

 class Person extends User{
     constructor(name,height)
     {
         super(name)
         this.height=height
     }

 }


// HOMEWORK

//1.  打印微信item （title description time） 到控制台
//2.  把title放到一个数组里 然后把title变成 id_title 的形式 0_Leochens 只在数组中操作即可 不用修改页面 
//3.  把item变成Message对象  { 私有(img ， title) descreption time  } 需要 get 和 set 







