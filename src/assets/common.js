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

//计算中位数
function getMedian(arr) {
    var concat = arr
    //数组排序 此为升序
    concat = concat.sort(function (a, b) {
        return a - b;
    })
    if (length % 2 == 1) {
        return (concat[(concat.length) / 2 - 0.5]);
    } else {
        return ((concat[concat.length / 2 - 1]) + (concat[concat.length / 2])) / 2;
    }
}
