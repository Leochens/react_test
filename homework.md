# 如何判断array是数组
     
> 使用instanceof方法

```js
    const x = [1,2,3,4]
    x instanceof Array //如果x是数组则返回true 否则就是false
```
> Array.isArray()    

```js
    let arr = [1,2,3]
    Array.isArray(arr)  //如果arr是数组则返回true 否则就是false
```

>Object.prototype.toString.call()

```js
    var arr = [1,2,3]
    Object.prototype.toString.call(arr)//是数组就返回 "[object Array]"
```


# 除了点 如何返回对象的键值
     
1. x.b
2. x["b"]

```js
    const x = {
        "a":12,
        "b":"Hello"
    }
    //1. 直接通过点获取
    console.log(x.b)
    //2. 通过键名获取
    console.log(x["b"])      

```

# 父子键重复

```js
    const obj5 = {
        "a":12,
        "b":66,
        "c":{
            "a":"hello ",
            "b":"world"
        }
    }
    console.log(obj5) //会发现并没有报错 
    console.log(obj5.c.a) //hello   可以正常输出
```



# map 对 people 数组进行加工

>给定字符串组成的array 使用map对每个人名前面加上 hello

```js
  const people=["Jhon","Bown"]
  people1 = people.map((it,id)=>{

    return "Hello "+it
  })
  
  console.log(people1) 
  //["Hello Jhon", "Hello Bown"]
```


# 定义一只小狗

```js

class Animals{                      //动物类  父类
    constructor(name){
        this.name = name
    }
    setAnimalName(newName){
        this.name = newName
    }
    getAnimalName(){
        console.log(this.name)
        return this.name
    }
}
class Dog extends Animals{         //狗   子类
    constructor(name,ownerName){
        super(name)
        this.ownerName = ownerName
    }
    
    sayHello(){
        console.log(this.name+" say Hello to "+this.ownerName)
    }
    getOwnerName(){
        console.log(this.ownerName)
        return this.ownerName
    }
    setOwnerName(newOwnerName){
        this.ownerName = newOwnerName
    }
}

dog = new Dog("poppy","zhl")
dog.sayHello() //poppy say Hello to zhl


```