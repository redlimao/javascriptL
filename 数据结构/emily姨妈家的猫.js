//在姨妈的所有邮件中都有猫的所有信息，根据邮件来记录猫的数量以及状态
//编程计划
//1、开始定义一个猫的集合，里面只有一只猫Spot
//2、按时间前后顺序，遍历所有的归档邮件
//3、查找born和died开头的段落
//4、将以born开头的段落里猫的名字全部添加到定义的猫的集合里。
//5、将died开头的段落里的猫的名字从猫的集合中删除
//从段落中找出名字
//1、找出段落里的冒号
//2、获取冒号后面的内容
//3、将找到的名字通过逗号进行分割
//数组对象的一些方法
//push在数组末尾插入新值
//pop在数组末尾删除值
//join将字符串数组转化为一个单一的字符创，传入的参数用于将数组的各个值连接起来
//split分割字符创和join相反
//charAt方法用于从某个字符串获取指定的字符
//slice切割拷贝出一部分字符串
//indexOf找出字符第一次出现的位置或者截取字符串中的子串
var ARCHIVE = [
    "born 05/09/2004 (mother A): Doctor1 Hobbles the 2nd",
    "died 30/10/2005 (mother B): Doctor2",
    "died 10/01/2006 (mother C): Doctor3 Hobbles the 2nd"
]
function findLivingCats(){
    var livingCats = {"Spot":catRecord("Spot",new Date(1997,2,5),"unknow")};

    function handleParagraph(paragraph){
        if(startsWith(paragraph,"born")){
            addCats(livingCats,catNames(paragraph),extractDate(paragraph),extractMother(paragraph));
        }else if(startsWith(paragraph,"died")){
            deadCats(livingCats,catNames(paragraph),extractDate(paragraph));
        }
    }
    //找出相关段落
    function startsWith(string,pattern){
        return string.slice(0,pattern.length) === pattern;
    }
    //提取猫的名字
    function catNames(paragraph){
        var colon = paragraph.indexOf(":");
        return paragraph.slice(colon + 2).split(",");
    }
    //获取日期
    function extractDate(paragraph){
        function numberAt(start,length) {
            return Number(paragraph.slice(start,start + length));
        }
        return new Date(numberAt(11,4),numberAt(8,2) - 1,numberAt(5,2));
    }

    //存储名字，出生日期，猫母亲的名字
    function catRecord(name,birthdate,mother){
        return {name:name,birth:birthdate,mother:mother};
    }
    function addCats(set,names,birthdate,mother){
        for(var i = 0;i < names.length;i++){
            set[names[i]] = catRecord(names[i],birthdate,mother);
        }
    }

    function deadCats(set,names,deathdate){
        for(var i = 0;i < names.length;i++){
            set[names[i]].death = deathdate;
        }
    }
    //提取母亲的名字
    function extractMother(paragraph){
        var start = paragraph.indexOf("(mother")+"(mother".length;
        var end = paragraph.indexOf(")");
        return paragraph.slice(start,end);
    }

    //向集合添加或这删除名字
    // function addToSet(set,values){
    //     for(var i = 0;i < values.length;i++){
    //         set[values[i]] = true;
    //         // console.log(values[i]);
    //     }
    // }
    // function removeFromSet(set,values){
    //     for(var i = 0;i < values.length;i++){
    //         set[values[i]] = false;
    //     }
    // }

    function catRecord(name,birthdate,mother){
        return {name:name,birth:birthdate,mother:mother};
    }
    function addCats(set,names,birthdate,mother){
        for(var i = 0;i < names.length;i++){
            set[names[i]] = catRecord(names[i],birthdate,mother);
        }
    }
    function deadCats(set,names,deathdate){
        for(var i = 0;i < names.length;i++){
            set[names[i]] = catRecord(names[i],deathdate)
        }
    }


    for(var mail = 0;mail < ARCHIVE.length; mail++){
        var paragraphs = ARCHIVE[mail].split("\n");
        for(var i = 0;i < paragraphs.length;i++){
            //var paragraph = paragraphs[i];
            handleParagraph(paragraphs[i]);
            // console.log(paragraphs[i]);
        }
        //对这封邮件进行处理
    }
    console.log(livingCats);
    return livingCats;
}

//分离段落
// var words = "Citied of the Interior";
// words.split(" ");

findLivingCats();