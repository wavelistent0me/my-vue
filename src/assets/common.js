function isNull(value) {
    if (value === null)
        return true;
    if (value == undefined)
        return true;
    if (value === "")
        return true;
    if (value === "null")
        return true;
    return false;
}

function show() {
    var now = new Date();
    var year = now.getFullYear(); //得到年份
    var month = now.getMonth() + 1;//得到月份
    var date = now.getDate();//得到日期
// var day = now.getDay();//得到周几
    var hour = now.getHours();//得到小时数
    var minute = now.getMinutes();//得到分钟数
    var second = now.getSeconds();//得到秒数
}