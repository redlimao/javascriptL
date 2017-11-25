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