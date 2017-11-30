//高阶函数
//大部分函数只是接受值，合并值，然后返回一些内容
//consoleArray遍历数组
function consoleArray(array){
    for(var i = 0;i < array.length;i++){
        console.log(array[i]);
    }
}
//如果要做console.log以外的事情
function forEach(array,action){
    for(var i = 0;i < array.length;i++){
        action(array[i]);
    }
}
//将行为作为一个函数值传入
forEach([1,3,4],console.log);
//通过匿名函数来编写
function sum(numbers){
    var total = 0;
    forEach(numbers,function(number){
        total += number;
    });
    return total;
}
console.log(sum([1,1,1]));
//修改函数
function negate(func) {
    return function(x){
        return !func(x);
    }
}
var isNotNaN = negate(isNaN);
console.log(isNotNaN(NaN));
//归约函数
function reduce(combine,base,array) {
    forEach(array,function(element){
        base = combine(base,element);
    });
    return base;
}
function add(a,b) {
    return a + b;
}
function sum(numbers){
    return reduce(add,0,numbers);
}
console.log(sum([2,2,2]));
//映射数组
function  map(func,array) {
    var result = [];
    forEach(array,function (element) {
        result.push(func(element));
    });
    return result;
}
console.log(map(Math.round,[1,5,1.2,3.5,Math.PI]));