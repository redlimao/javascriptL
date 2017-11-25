//有一些苹果，每天吃掉一半，跳出一个坏掉的，第6天发现还剩下1个苹果，本来有多少个苹果
var num;
function numbers(n){
    if(n === 6){
        num = 1;
    }else{
        num = (numbers(n+1)+1)*2;
    }
    return num;
}
console.log(numbers(0));
//对象方式
var obj1 = {
    num : 5,
    fac : function(x){
        if(x === 1){
            return 1;
        }else{
            return x * this.fac(x - 1);
        }
    }
}
var obj2 = {fac : obj1.fac};
obj1 = {};
// console.log(obj2.fac(4));
obj2.fac(4);