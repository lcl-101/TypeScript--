
//数组枚举 (可以反向映射)
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter);
console.log(Role);

//字符窜枚举 (不可以反向映射)
enum Message {
    Success = "恭喜你",
    Fail = "抱歉"
}
console.log(Message);

//异构枚举
enum Answer {
    N,
    Y = "yse"
}
console.log(Answer);

//枚举成员
//Role.Reporter = 2;  定义后不能修改

//枚举成员分类
enum Char {
    //const (常量枚举)
    a,              //无初始值 
    b = Char.a,     //对已有枚举成员的引用
    c = 1 + 3,      //常量的表达式
    // computed (需要被计算的枚举成员)
    d = Math.random(),
    e = '123'.length,
    f = 4
}
console.log(Char);

//常量枚举 (不需要对象,需要对象的值)
const enum Month {
    Jan,
    Feb,
    Mar
}
// 例如
let month = [Month.Jan, Month.Feb, Month.Mar];
console.log(month);

//枚举类型
enum E {a,b}
enum F {a=0,b=1}
enum G {a="apple",b="banana"}

let e:E = 3;
let f:F = 2;
// e === f 不同类型的枚举不能比较

let e1: E.a = 1
let e2: E.b
// e1 === e2
let e3: E.a = 1
e1 === e3

//字符窜枚举取值只能是枚举成员的类型
let g1: G = G.b
let g2: G.a


//https://www.tslang.cn/play/index.html#src=enum%20Role%20%7B%0D%0A%20%20%20%20Reporter%20%3D%204%2C%0D%0A%20%20%20%20Developer%2C%0D%0A%20%20%20%20Maintainer%2C%0D%0A%20%20%20%20Owner%2C%0D%0A%20%20%20%20Guest%0D%0A%7D%0D%0A%0D%0Aenum%20Message%20%7B%0D%0A%20%20%20%20Success%20%3D%20%22%E6%81%AD%E5%96%9C%E4%BD%A0%22%2C%0D%0A%20%20%20%20Fail%20%3D%20%22%E6%8A%B1%E6%AD%89%22%0D%0A%7D%0D%0A%0D%0Aenum%20Answer%20%7B%0D%0A%20%20%20%20N%2C%0D%0A%20%20%20%20Y%20%3D%20%22yse%22%0D%0A%7D%0D%0A%0D%0A%2F%2F%E6%9E%9A%E4%B8%BE%E6%88%90%E5%91%98%E5%88%86%E7%B1%BB%0D%0Aenum%20Char%20%7B%0D%0A%20%20%20%20%2F%2Fconst%20(%E5%B8%B8%E9%87%8F%E6%9E%9A%E4%B8%BE)%0D%0A%20%20%20%20a%2C%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%E6%97%A0%E5%88%9D%E5%A7%8B%E5%80%BC%20%0D%0A%20%20%20%20b%20%3D%20Char.a%2C%20%20%20%20%20%2F%2F%E5%AF%B9%E5%B7%B2%E6%9C%89%E6%9E%9A%E4%B8%BE%E6%88%90%E5%91%98%E7%9A%84%E5%BC%95%E7%94%A8%0D%0A%20%20%20%20c%20%3D%201%20%2B%203%2C%20%20%20%20%20%20%2F%2F%E5%B8%B8%E9%87%8F%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F%0D%0A%20%20%20%20%2F%2F%20computed%20(%E9%9C%80%E8%A6%81%E8%A2%AB%E8%AE%A1%E7%AE%97%E7%9A%84%E6%9E%9A%E4%B8%BE%E6%88%90%E5%91%98)%0D%0A%20%20%20%20d%20%3D%20Math.random()%2C%0D%0A%20%20%20%20e%20%3D%20'123'.length%0D%0A%7D%0D%0A%0D%0A%2F%2F%E5%B8%B8%E9%87%8F%E6%9E%9A%E4%B8%BE%0D%0Aconst%20enum%20Month%20%7B%0D%0A%20%20%20%20Jan%2C%0D%0A%20%20%20%20Feb%2C%0D%0A%20%20%20%20Mar%0D%0A%7D%0D%0A%2F%2F%20%E4%BE%8B%E5%A6%82%0D%0Alet%20month%20%3D%20%5BMonth.Jan%2C%20Month.Feb%2C%20Month.Mar%5D%0D%0A%2F%2F%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%9E%8B%0D%0Aenum%20E%20%7Ba%2Cb%7D%0D%0Aenum%20F%20%7Ba%3D0%2Cb%3D1%7D%0D%0Aenum%20G%20%7B%20a%20%3D%20%22apple%22%2C%20b%20%3D%20%22banana%22%20%7D%0D%0A%0D%0Alet%20e%3AE%20%3D%203%3B%0D%0Alet%20f%3AF%20%3D%202%3B%0D%0A%0D%0Alet%20e1%3A%20E.a%20%3D%201%0D%0Alet%20e2%3A%20E.b%0D%0A%2F%2F%20e1%20%3D%3D%3D%20e2%0D%0Alet%20e3%3A%20E.a%20%3D%201%0D%0Ae1%20%3D%3D%3D%20e3%0D%0A%0D%0A%2F%2F%E5%AD%97%E7%AC%A6%E7%AA%9C%E6%9E%9A%E4%B8%BE%E5%8F%96%E5%80%BC%E5%8F%AA%E8%83%BD%E6%98%AF%E6%9E%9A%E4%B8%BE%E6%88%90%E5%91%98%E7%9A%84%E7%B1%BB%E5%9E%8B%0D%0Alet%20g1%3A%20G%20%3D%20G.b%0D%0Alet%20g2%3A%20G.a


enum byRole {
    role1 = 1,
    role2,
    role3,
    role4,
    role5,
}

let initByRole = (role: byRole) => {
    if (role == byRole.role1 || role == byRole.role2) {
        // do sth
    } else if (role == byRole.role3 || role == byRole.role4){

    } else if (role == byRole.role5) {
 
    } else {
        
    }
}