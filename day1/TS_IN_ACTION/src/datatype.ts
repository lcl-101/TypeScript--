//原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = "abc";
//str = num;

//数组
let arr: number[] = [1,2,3];
let arr1: Array<number | string> = [1,2,3,4,"a"];

//元祖
let tuple: [number, string] = [1,"a"];
//元祖越界
tuple.push(2);
console.log(tuple);
//tuple[2] 不能越界访问

//函数
let add = (x:number,y:number):number => x + y;
let compute: (x:number,y:number) => number;
compute = (a,b) => a+b;

//对象
let obj: {x:number, y:number} = {x:1, y:2};
obj.x = 3;

//symbol (具有唯一的值)
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

//underfined, null
let un:undefined = undefined;
let nu: null = null;
//num = undefined;

//void
let noReturn = () => {}

//any
let x;
x = 1;
x = [];
x = "adb";

//never (永远不会有返回值)
let error = () => {
    throw new Error('error')
}
let endless = () => {  //死循环
    while(true){}
}